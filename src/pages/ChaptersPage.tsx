import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Target } from 'lucide-react';

const ChaptersPage = () => {
  const navigate = useNavigate();
  const { grade, subject } = useParams();
  const decodedSubject = decodeURIComponent(subject || '');

  // Mock chapter data - in a real app, this would come from your data source
  const chapters = [
    {
      id: 1,
      title: 'Introduction to Numbers',
      description: 'Basic concepts of numbers, counting, and number systems',
      duration: '2-3 hours',
      difficulty: 'Beginner',
      progress: 100,
      isCompleted: true,
      questionsCount: 25,
    },
    {
      id: 2,
      title: 'Addition and Subtraction',
      description: 'Learn fundamental arithmetic operations',
      duration: '3-4 hours',
      difficulty: 'Beginner',
      progress: 75,
      isCompleted: false,
      questionsCount: 30,
    },
    {
      id: 3,
      title: 'Multiplication and Division',
      description: 'Master multiplication tables and division concepts',
      duration: '4-5 hours',
      difficulty: 'Intermediate',
      progress: 45,
      isCompleted: false,
      questionsCount: 35,
    },
    {
      id: 4,
      title: 'Fractions and Decimals',
      description: 'Understanding parts of a whole and decimal notation',
      duration: '3-4 hours',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      questionsCount: 28,
    },
    {
      id: 5,
      title: 'Geometry Basics',
      description: 'Shapes, angles, and basic geometric concepts',
      duration: '2-3 hours',
      difficulty: 'Intermediate',
      progress: 0,
      isCompleted: false,
      questionsCount: 22,
    },
    {
      id: 6,
      title: 'Measurement and Units',
      description: 'Length, weight, volume, and unit conversions',
      duration: '2-3 hours',
      difficulty: 'Beginner',
      progress: 0,
      isCompleted: false,
      questionsCount: 20,
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Advanced': return 'bg-red-500 text-white';
      case 'Intermediate': return 'bg-yellow-500 text-black';
      case 'Beginner': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-500';
    if (progress >= 60) return 'text-yellow-500';
    if (progress >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const handleStartQuiz = (chapterId: number, chapterTitle: string) => {
    navigate(`/grade/${grade}/subject/${encodeURIComponent(decodedSubject)}/chapter/${chapterId}/quiz`);
  };

  const overallProgress = Math.round(chapters.reduce((acc, chapter) => acc + chapter.progress, 0) / chapters.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20 mr-4"
            onClick={() => navigate(`/grade/${grade}/subjects`)}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Subjects
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            {decodedSubject} Chapters
          </h1>
          <p className="text-xl text-blue-200 mb-6">
            Grade {grade} • Choose a chapter to start your quiz
          </p>
          
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white font-medium">Overall Progress</span>
              <span className={`font-bold ${getProgressColor(overallProgress)}`}>
                {overallProgress}%
              </span>
            </div>
            <Progress value={overallProgress} className="h-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => (
            <Card 
              key={chapter.id}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CardTitle className="text-white text-lg mr-3">
                        Chapter {chapter.id}
                      </CardTitle>
                      {chapter.isCompleted && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                    <CardTitle className="text-white text-xl mb-2">
                      {chapter.title}
                    </CardTitle>
                    <Badge className={getDifficultyColor(chapter.difficulty)}>
                      {chapter.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-blue-200 mt-2">
                  {chapter.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{chapter.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="mr-2 h-4 w-4" />
                    <span>{chapter.questionsCount} questions</span>
                  </div>
                </div>

                {chapter.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-300">Progress</span>
                      <span className={`font-medium ${getProgressColor(chapter.progress)}`}>
                        {chapter.progress}%
                      </span>
                    </div>
                    <Progress value={chapter.progress} className="h-2" />
                  </div>
                )}
                
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
                  onClick={() => handleStartQuiz(chapter.id, chapter.title)}
                >
                  {chapter.progress > 0 ? 'Continue Quiz' : 'Start Quiz'}
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;