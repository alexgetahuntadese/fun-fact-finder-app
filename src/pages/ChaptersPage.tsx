
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import ChapterCard from '@/components/ChapterCard';
import { Button } from '@/components/ui/button';
import { getChaptersBySubject, Chapter } from '@/utils/supabaseData';

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
        const fetchedChapters = await getChaptersBySubject(subject);
        setChapters(fetchedChapters);
      } catch (err) {
        console.error('Error fetching chapters:', err);
        setError('Failed to load chapters. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (subject) {
      fetchChapters();
    }
  }, [subject]);

  const handleChapterToggle = (chapterName: string) => {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center py-8">
            <div className="text-lg">Loading chapters...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subjects
          </Button>
          <div className="text-center py-8">
            <div className="text-red-600 mb-4">{error}</div>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Subjects
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Choose Chapters
          </h1>
          <p className="text-gray-600">
            Select chapters from {subject} for {grade}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {selectedChapters.length} chapter(s) selected
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.id}
              title={chapter.name}
              description={chapter.description || `Practice questions from ${chapter.name}`}
              isSelected={selectedChapters.includes(chapter.name)}
              onClick={() => handleChapterToggle(chapter.name)}
            />
          ))}
        </div>

        {selectedChapters.length > 0 && (
          <div className="fixed bottom-4 left-4 right-4 max-w-md mx-auto">
            <Button
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
            >
              Continue with {selectedChapters.length} chapter(s)
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaptersPage;
