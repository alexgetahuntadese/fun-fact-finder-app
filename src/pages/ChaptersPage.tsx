
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowLeft, FileText } from 'lucide-react';
import { getSubjects, getChaptersBySubject, Subject, Chapter } from '@/utils/supabaseData';

const ChaptersPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const [subject, setSubject] = useState<Subject | null>(null);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadChapters = async () => {
      if (!subjectId) return;

      try {
        // Get subject details
        const subjects = await getSubjects();
        const currentSubject = subjects.find(s => s.id === subjectId);
        setSubject(currentSubject || null);

        // Get chapters for this subject
        const chaptersData = await getChaptersBySubject(subjectId);
        setChapters(chaptersData);
      } catch (error) {
        console.error('Error loading chapters:', error);
      } finally {
        setLoading(false);
      }
    };

    loadChapters();
  }, [subjectId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading chapters...</div>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Subject Not Found</h2>
          <Link to="/subjects">
            <Button variant="outline" className="text-white border-white/20 hover:bg-white/20">
              Back to Subjects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="h-full w-full">
        <div className="p-6">
          <div className="flex items-center mb-8">
            <Link to="/subjects">
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Subjects
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{subject.name}</h1>
              <p className="text-blue-200">
                {subject.description || `Explore all chapters in ${subject.name}`}
              </p>
              <Badge variant="secondary" className="bg-white/20 text-white mt-2">
                {chapters.length} chapters
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {chapters.map((chapter, index) => (
              <Card key={chapter.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-lg bg-green-500 group-hover:bg-green-400 transition-colors">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-white line-clamp-2">
                        {chapter.name}
                      </CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 text-xs">
                          Chapter {index + 1}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {chapter.description && (
                    <p className="text-sm text-blue-200 mb-4 line-clamp-3">
                      {chapter.description}
                    </p>
                  )}
                  
                  <div className="text-xs text-gray-300 mb-4">
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-3 w-3" />
                      <span>{subject.name}</span>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    className="w-full text-green-300 hover:text-white hover:bg-green-600/20"
                    disabled
                  >
                    Coming Soon - Quiz
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {chapters.length === 0 && (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-white/40 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-white mb-2">No Chapters Found</h2>
              <p className="text-blue-200">
                There are no chapters available for {subject.name} at the moment.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;
