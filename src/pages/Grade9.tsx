
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  ArrowLeft,
  BookOpen, 
  Trophy, 
  Clock, 
  Star,
  Calculator,
  Dna,
  FlaskConical,
  Zap,
  MapPin,
  Clock8,
  Activity,
  Laptop,
  Languages,
  BookA,
  Scale
} from 'lucide-react';
import SubjectCard from '@/components/SubjectCard';
import { useIsMobile } from '@/hooks/useIsMobile';

const Grade9 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [user] = useState({ name: 'Student', grade: '9' }); // Mock user for now

  const grade9Subjects = [
    { name: 'English', icon: BookA, topics: ['Basic Grammar', 'Reading Comprehension', 'Writing Skills', 'Literature Introduction'] },
    { name: 'Amharic', icon: Languages, topics: ['Grammar', 'Literature', 'Composition', 'Language Skills'] },
    { name: 'Mathematics', icon: Calculator, topics: ['Algebra Basics', 'Linear Equations', 'Geometry Fundamentals', 'Number Systems'] },
    { name: 'Information Technology (ICT)', icon: Laptop, topics: ['Computer Basics', 'Software Applications', 'Internet Fundamentals', 'Digital Literacy'] },
    { name: 'Civics & Ethical Education', icon: Scale, topics: ['Citizenship', 'Ethics', 'Human Rights', 'Government Basics'] },
    { name: 'Biology', icon: Dna, topics: ['Cell Biology', 'Plant Biology', 'Human Body Systems', 'Basic Genetics'] },
    { name: 'Chemistry', icon: FlaskConical, topics: ['Matter & Elements', 'Chemical Reactions', 'Atomic Structure', 'Basic Compounds'] },
    { name: 'Physics', icon: Zap, topics: ['Motion & Forces', 'Energy', 'Heat & Temperature', 'Light & Sound'] },
    { name: 'Geography', icon: MapPin, topics: ['Physical Geography', 'Climate & Weather', 'Maps & Location', 'Human Geography'] },
    { name: 'History', icon: Clock8, topics: ['World History', 'Ethiopian History', 'Ancient Civilizations', 'Historical Thinking'] },
    { name: 'Physical Education', icon: Activity, topics: ['Sports & Games', 'Health Education', 'Physical Fitness', 'Body Systems'] }
  ];

  const stats = [
    { icon: Trophy, label: 'Completed', value: '8/11', color: 'text-yellow-500' },
    { icon: Star, label: 'Average Score', value: '85%', color: 'text-blue-500' },
    { icon: Clock, label: 'Study Time', value: '24h', color: 'text-green-500' },
    { icon: BookOpen, label: 'Total Subjects', value: '11', color: 'text-purple-500' }
  ];

  const getSubjectProgress = (subjectName: string) => {
    const mockData = {
      'Mathematics': { completed: 8, total: 12, percentage: 67 },
      'Physics': { completed: 6, total: 9, percentage: 67 },
      'Chemistry': { completed: 7, total: 9, percentage: 78 },
      'Biology': { completed: 5, total: 7, percentage: 71 },
      'English': { completed: 5, total: 6, percentage: 83 },
      'Amharic': { completed: 4, total: 6, percentage: 67 }
    };
    return mockData[subjectName as keyof typeof mockData] || { completed: 4, total: 8, percentage: 50 };
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
    // Navigate to quiz interface or handle quiz selection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate('/')}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Grade 9</h1>
                <p className="text-gray-400">Foundation courses for secondary education</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/5 border-white/20 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400">{stat.label}</p>
                      <p className="text-lg font-bold">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Progress Overview */}
          <Card className="bg-white/5 border-white/20 text-white mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>Grade 9 Progress</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your overall progress across all subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-gray-400">8 out of 11 subjects completed</p>
              </div>
            </CardContent>
          </Card>

          {/* Subjects Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Subjects</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                {grade9Subjects.length} subjects
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade9Subjects.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={9}
                  onSelectQuiz={handleSelectQuiz}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grade9;
