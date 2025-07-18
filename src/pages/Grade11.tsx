
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
  Scale,
  Ruler,
  DollarSign,
  Briefcase
} from 'lucide-react';
import SubjectCard from '@/components/SubjectCard';
import { useIsMobile } from '@/hooks/useIsMobile';

const Grade11 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [user] = useState({ name: 'Student', grade: '11' }); // Mock user for now

  const grade11Subjects = {
    naturalScience: [
      { name: 'Biology', icon: Dna, chapters: ['Cell Biology', 'Genetics', 'Ecology', 'Human Biology'] },
      { name: 'Chemistry', icon: FlaskConical, chapters: ['Organic Chemistry', 'Physical Chemistry', 'Chemical Bonding', 'Reactions'] },
      { name: 'Physics', icon: Zap, chapters: ['Mechanics', 'Waves', 'Electricity', 'Optics'] },
      { name: 'Technical Drawing', icon: Ruler, chapters: ['Engineering Drawing', '3D Modeling', 'Geometric Construction', 'Technical Skills'] }
    ],
    socialScience: [
      { name: 'Geography', icon: MapPin, chapters: ['Physical Geography', 'Human Geography', 'Climate Studies', 'Regional Geography'] },
      { name: 'History', icon: Clock8, chapters: ['World History', 'Ethiopian History', 'Ancient Civilizations', 'Modern History'] },
      { name: 'Economics', icon: DollarSign, chapters: ['Microeconomics', 'Macroeconomics', 'Market Systems', 'Economic Theory'] },
      { name: 'General Business', icon: Briefcase, chapters: ['Business Fundamentals', 'Marketing Basics', 'Accounting Principles', 'Management'] }
    ],
    common: [
      { name: 'English', icon: BookA, chapters: ['Literature', 'Grammar', 'Writing Skills', 'Reading Comprehension'] },
      { name: 'Civics', icon: Scale, chapters: ['Government Systems', 'Constitution', 'Human Rights', 'Citizenship'] },
      { name: 'Physical Education', icon: Activity, chapters: ['Sports', 'Health Education', 'Fitness', 'Body Systems'] },
      { name: 'Mathematics', icon: Calculator, chapters: ['Advanced Algebra', 'Calculus Introduction', 'Matrices', 'Sequences & Series'] },
      { name: 'IT', icon: Laptop, chapters: ['Computer Basics', 'Programming Introduction', 'Database Fundamentals', 'Internet Technology'] },
      { name: 'National Language', icon: Languages, chapters: ['Amharic Literature', 'Grammar', 'Composition', 'Language Skills'] }
    ]
  };

  const stats = [
    { icon: Trophy, label: 'Completed', value: '9/14', color: 'text-yellow-500' },
    { icon: Star, label: 'Average Score', value: '78%', color: 'text-blue-500' },
    { icon: Clock, label: 'Study Time', value: '45h', color: 'text-green-500' },
    { icon: BookOpen, label: 'Total Subjects', value: '14', color: 'text-purple-500' }
  ];

  const getSubjectProgress = (subjectName: string) => {
    const mockData = {
      'Mathematics': { completed: 8, total: 12, percentage: 67 },
      'Physics': { completed: 6, total: 9, percentage: 67 },
      'Chemistry': { completed: 7, total: 9, percentage: 78 },
      'Biology': { completed: 5, total: 7, percentage: 71 },
      'English': { completed: 5, total: 6, percentage: 83 },
      'Geography': { completed: 6, total: 8, percentage: 75 },
      'History': { completed: 7, total: 8, percentage: 88 },
      'Economics': { completed: 5, total: 9, percentage: 56 }
    };
    return mockData[subjectName as keyof typeof mockData] || { completed: 4, total: 8, percentage: 50 };
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
    // Navigate to quiz interface or handle quiz selection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
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
              <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Grade 11</h1>
                <p className="text-gray-400">Pre-university level studies</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
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
                <span>Grade 11 Progress</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Choose your stream and track your progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>64%</span>
                </div>
                <Progress value={64} className="h-2" />
                <p className="text-xs text-gray-400">9 out of 14 subjects completed</p>
              </div>
            </CardContent>
          </Card>

          {/* Natural Science Stream */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-white">📘 Natural Science Stream</h2>
              <Badge variant="secondary" className="ml-3 bg-blue-100 text-blue-800">
                {grade11Subjects.naturalScience.length} subjects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade11Subjects.naturalScience.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={11}
                  onSelectQuiz={handleSelectQuiz}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>

          {/* Social Science Stream */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-white">📗 Social Science Stream</h2>
              <Badge variant="secondary" className="ml-3 bg-green-100 text-green-800">
                {grade11Subjects.socialScience.length} subjects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade11Subjects.socialScience.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={11}
                  onSelectQuiz={handleSelectQuiz}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </div>

          {/* Common Courses */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-white">📙 Common Courses</h2>
              <Badge variant="secondary" className="ml-3 bg-yellow-100 text-yellow-800">
                {grade11Subjects.common.length} subjects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade11Subjects.common.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={11}
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

export default Grade11;
