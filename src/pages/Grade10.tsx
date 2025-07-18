
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

const Grade10 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [user] = useState({ name: 'Student', grade: '10' }); // Mock user for now

  const grade10Subjects = [
    { name: 'English', icon: BookA, topics: ['Literature Analysis', 'Advanced Grammar', 'Essay Writing', 'Communication Skills'] },
    { name: 'Amharic', icon: Languages, topics: ['Advanced Grammar', 'Literature Study', 'Creative Writing', 'Language Arts'] },
    { name: 'Mathematics', icon: Calculator, topics: ['Quadratic Functions', 'Trigonometry', 'Statistics', 'Probability'] },
    { name: 'Information Technology (ICT)', icon: Laptop, topics: ['Programming Basics', 'Database Fundamentals', 'Web Development', 'Computer Networks'] },
    { name: 'Civics & Ethical Education', icon: Scale, topics: ['Democracy', 'Constitutional Law', 'Social Ethics', 'Global Citizenship'] },
    { name: 'Biology', icon: Dna, topics: ['Advanced Cell Biology', 'Genetics', 'Evolution', 'Ecology Basics'] },
    { name: 'Chemistry', icon: FlaskConical, topics: ['Chemical Bonding', 'Organic Chemistry', 'Acids & Bases', 'Stoichiometry'] },
    { name: 'Physics', icon: Zap, topics: ['Waves & Optics', 'Electricity', 'Magnetism', 'Thermodynamics'] },
    { name: 'Geography', icon: MapPin, topics: ['Regional Geography', 'Environmental Geography', 'Economic Geography', 'Cartography'] },
    { name: 'History', icon: Clock8, topics: ['Modern History', 'African History', 'Social Movements', 'Historical Analysis'] },
    { name: 'Physical Education', icon: Activity, topics: ['Advanced Sports', 'Exercise Science', 'Health & Wellness', 'Team Leadership'] }
  ];

  const stats = [
    { icon: Trophy, label: 'Completed', value: '7/11', color: 'text-yellow-500' },
    { icon: Star, label: 'Average Score', value: '82%', color: 'text-blue-500' },
    { icon: Clock, label: 'Study Time', value: '32h', color: 'text-green-500' },
    { icon: BookOpen, label: 'Total Subjects', value: '11', color: 'text-purple-500' }
  ];

  const getSubjectProgress = (subjectName: string) => {
    const mockData = {
      'Mathematics': { completed: 9, total: 15, percentage: 60 },
      'Physics': { completed: 8, total: 12, percentage: 67 },
      'Chemistry': { completed: 6, total: 10, percentage: 60 },
      'Biology': { completed: 7, total: 10, percentage: 70 },
      'English': { completed: 6, total: 8, percentage: 75 },
      'Amharic': { completed: 5, total: 8, percentage: 63 }
    };
    return mockData[subjectName as keyof typeof mockData] || { completed: 5, total: 10, percentage: 50 };
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
    // Navigate to quiz interface or handle quiz selection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
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
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Grade 10</h1>
                <p className="text-gray-400">Advanced secondary education preparation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
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
                <span>Grade 10 Progress</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Your overall progress across all subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>64%</span>
                </div>
                <Progress value={64} className="h-2" />
                <p className="text-xs text-gray-400">7 out of 11 subjects completed</p>
              </div>
            </CardContent>
          </Card>

          {/* Subjects Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Subjects</h2>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {grade10Subjects.length} subjects
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade10Subjects.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={10}
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

export default Grade10;
