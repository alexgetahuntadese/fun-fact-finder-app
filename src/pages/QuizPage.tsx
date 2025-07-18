
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Play, BookOpen, Target } from 'lucide-react';
import { getChaptersBySubject, getSubjects, Subject, Chapter } from '@/utils/supabaseData';

const QuizPage = () => {
  const { subjectId, chapterId } = useParams<{ subjectId: string; chapterId: string }>();
  const [subject, setSubject] = useState<Subject | null>(null);
  const [chapter, setChapter] = useState<Chapter | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      if (!subjectId || !chapterId) return;

      try {
        // Get subject details
        const subjects = await getSubjects();
        const currentSubject = subjects.find(s => s.id === subjectId);
        setSubject(currentSubject || null);

        // Get chapter details
        const chapters = await getChaptersBySubject(subjectId);
        const currentChapter = chapters.find(c => c.id === chapterId);
        setChapter(currentChapter || null);
      } catch (error) {
        console.error('Error loading quiz data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [subjectId, chapterId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading quiz...</div>
      </div>
    );
  }

  if (!subject || !chapter) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Quiz Not Found</h2>
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
            <Link to={`/chapters/${subjectId}`}>
              <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Chapters
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{chapter.name}</h1>
              <p className="text-blue-200 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                {subject.name}
              </p>
              {chapter.description && (
                <p className="text-blue-200 mt-2">{chapter.description}</p>
              )}
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">
                  Ready to Start Quiz?
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="p-6 rounded-lg bg-blue-500/20 border border-blue-300/20">
                    <Target className="h-12 w-12 text-blue-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Chapter Quiz</h3>
                    <p className="text-blue-200">
                      Test your knowledge on {chapter.name} with interactive questions
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-green-300 font-semibold">Subject</div>
                      <div className="text-white">{subject.name}</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <div className="text-blue-300 font-semibold">Chapter</div>
                      <div className="text-white">{chapter.name}</div>
                    </div>
                  </div>

                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold"
                    disabled
                  >
                    <Play className="h-5 w-5 mr-2" />
                    Start Quiz (Coming Soon)
                  </Button>

                  <p className="text-sm text-gray-300">
                    Quiz functionality will be available soon. Stay tuned!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
