
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ArrowLeft, ChevronRight } from 'lucide-react';
import { getSubjects, getChaptersBySubject, Subject } from '@/utils/supabaseData';

const SubjectsPage = () => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [chapterCounts, setChapterCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const subjectsData = await getSubjects();
        setSubjects(subjectsData);

        // Get chapter counts for each subject
        const counts: Record<string, number> = {};
        await Promise.all(
          subjectsData.map(async (subject) => {
            const chapters = await getChaptersBySubject(subject.id);
            counts[subject.id] = chapters.length;
          })
        );
        setChapterCounts(counts);
      } catch (error) {
        console.error('Error loading subjects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSubjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading subjects...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-white/20 mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">All Subjects</h1>
            <p className="text-blue-200">Browse all available subjects and their chapters</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <Card key={subject.id} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group cursor-pointer">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-lg bg-blue-500 group-hover:bg-blue-400 transition-colors">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-white">
                      {subject.name}
                    </CardTitle>
                    {subject.description && (
                      <p className="text-sm text-blue-200 mt-1">
                        {subject.description}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    {chapterCounts[subject.id] || 0} chapters
                  </Badge>
                </div>
                
                <Link to={`/chapters/${subject.id}`}>
                  <Button 
                    variant="ghost" 
                    className="w-full text-blue-300 hover:text-white hover:bg-blue-600/20"
                  >
                    View Chapters
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {subjects.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-white/40 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-white mb-2">No Subjects Found</h2>
            <p className="text-blue-200">There are no subjects available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectsPage;
