
import React, { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getChapters, Chapter } from '@/utils/supabaseData';

interface ChaptersPageProps {
  grade: string;
  subject: string;
  onBack: () => void;
  onChapterSelect: (chapters: string[]) => void;
}

const ChaptersPage: React.FC<ChaptersPageProps> = ({
  grade,
  subject,
  onBack,
  onChapterSelect
}) => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching chapters for subject:', subject);
        const fetchedChapters = await getChapters(subject);
        console.log('Successfully fetched chapters:', fetchedChapters.length);
        setChapters(fetchedChapters);
      } catch (err) {
        console.error('Error fetching chapters:', err);
        setError('Failed to load chapters. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchChapters();
  }, [subject]);

  const toggleChapter = (chapterName: string) => {
    setSelectedChapters(prev => 
      prev.includes(chapterName)
        ? prev.filter(name => name !== chapterName)
        : [...prev, chapterName]
    );
  };

  const handleContinue = () => {
    if (selectedChapters.length > 0) {
      onChapterSelect(selectedChapters);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center py-8">
            <div className="text-lg text-white">Loading chapters...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-2xl mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 text-white hover:text-gray-200 hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subjects
          </Button>
          <div className="text-center py-8">
            <div className="text-red-400 mb-4">{error}</div>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-2xl mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-white hover:text-gray-200 hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Choose Chapters
          </h1>
          <p className="text-blue-200">
            Select chapters from {subject} for Grade {grade}
          </p>
          {selectedChapters.length > 0 && (
            <Badge className="mt-2 bg-green-500/20 text-green-300 border-green-500/30">
              {selectedChapters.length} chapter{selectedChapters.length > 1 ? 's' : ''} selected
            </Badge>
          )}
        </div>

        <div className="space-y-4 mb-8">
          {chapters.map((chapter) => {
            const isSelected = selectedChapters.includes(chapter.name);
            return (
              <Card
                key={chapter.id}
                className={`cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'bg-blue-500/30 border-blue-400/50 ring-2 ring-blue-400/50' 
                    : 'bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20'
                }`}
                onClick={() => toggleChapter(chapter.name)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">
                        {chapter.name}
                      </h3>
                      <p className="text-sm text-blue-200 mb-3">
                        {chapter.description || `Practice questions and concepts from ${chapter.name}`}
                      </p>
                      
                      <div className="flex items-center space-x-4 text-xs text-gray-300">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-3 w-3" />
                          <span>Multiple topics</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>Est. 30-45 min</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-400" />
                          <span>4.7</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-blue-500 border-blue-400' 
                        : 'border-white/40 hover:border-white/60'
                    }`}>
                      {isSelected && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedChapters.length > 0 && (
          <div className="sticky bottom-4">
            <Button 
              onClick={handleContinue}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-3"
            >
              Continue with {selectedChapters.length} Chapter{selectedChapters.length > 1 ? 's' : ''}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;
