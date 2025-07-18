
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

const Grade12 = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [user] = useState({ name: 'Student', grade: '12' }); // Mock user for now

  const grade12Subjects = {
    naturalScience: [
      { 
        name: 'Biology', 
        icon: Dna, 
        chapters: [
          'Unit 1: Application of Biology',
          'Unit 2: Microorganisms',
          'Unit 3: Energy transformation',
          'Unit 4: Evolution',
          'Unit 5: Human Body System',
          'Unit 6: Climate Change'
        ]
      },
      { 
        name: 'Chemistry', 
        icon: FlaskConical, 
        chapters: [
          'Chapter 1: Atomic Structure and Periodic Properties',
          'Chapter 2: Chemical Bonding',
          'Chapter 3: States of Matter',
          'Chapter 4: Solutions',
          'Chapter 5: Chemical Kinetics',
          'Chapter 6: Chemical Equilibrium',
          'Chapter 7: Acids and Bases',
          'Chapter 8: Redox Reactions and Electrochemistry',
          'Chapter 9: Organic Chemistry'
        ]
      },
      { 
        name: 'Physics', 
        icon: Zap, 
        chapters: [
          'Chapter 1: Mechanics',
          'Chapter 2: Thermal Physics',
          'Chapter 3: Oscillations and Waves',
          'Chapter 4: Electricity and Magnetism',
          'Chapter 5: Electromagnetic Induction',
          'Chapter 6: Alternating Current',
          'Chapter 7: Electromagnetic Waves',
          'Chapter 8: Optics',
          'Chapter 9: Modern Physics'
        ]
      },
      { 
        name: 'Technical Drawing', 
        icon: Ruler, 
        chapters: [
          'Chapter 1: Introduction to Technical Drawing',
          'Chapter 2: Geometric Construction',
          'Chapter 3: Orthographic Projection',
          'Chapter 4: Isometric Drawing',
          'Chapter 5: Sectional Views',
          'Chapter 6: Working Drawings',
          'Chapter 7: Computer-Aided Design (CAD)'
        ]
      }
    ],
    socialScience: [
      { 
        name: 'Geography', 
        icon: MapPin, 
        chapters: [
          'Chapter 1: Physical Geography of the World',
          'Chapter 2: Population and Settlement',
          'Chapter 3: Economic Geography',
          'Chapter 4: Political Geography',
          'Chapter 5: Environmental Geography',
          'Chapter 6: Regional Geography of Africa',
          'Chapter 7: Geography of Ethiopia and the Horn',
          'Chapter 8: Geographic Information Systems (GIS)'
        ]
      },
      { 
        name: 'History', 
        icon: Clock8, 
        chapters: [
          'Chapter 1: The Ancient World',
          'Chapter 2: Medieval Period',
          'Chapter 3: The Modern World (1500-1800)',
          'Chapter 4: Age of Revolution and Nationalism',
          'Chapter 5: The 20th Century World',
          'Chapter 6: Contemporary World',
          'Chapter 7: African History',
          'Chapter 8: Ethiopian History'
        ]
      },
      { 
        name: 'Economics', 
        icon: DollarSign, 
        chapters: [
          'Chapter 1: Introduction to Economics',
          'Chapter 2: Demand, Supply and Market Equilibrium',
          'Chapter 3: Consumer Behavior and Demand Analysis',
          'Chapter 4: Production and Cost Analysis',
          'Chapter 5: Market Structure and Pricing',
          'Chapter 6: Factor Markets',
          'Chapter 7: National Income and Economic Growth',
          'Chapter 8: Money, Banking and Monetary Policy',
          'Chapter 9: International Trade and Finance'
        ]
      },
      { 
        name: 'General Business', 
        icon: Briefcase, 
        chapters: [
          'Chapter 1: Introduction to Business',
          'Chapter 2: Business Organization and Management',
          'Chapter 3: Marketing Management',
          'Chapter 4: Financial Management',
          'Chapter 5: Human Resource Management',
          'Chapter 6: Production and Operations Management',
          'Chapter 7: Business Ethics and Social Responsibility',
          'Chapter 8: Entrepreneurship and Small Business'
        ]
      }
    ],
    common: [
      { 
        name: 'English', 
        icon: BookA, 
        chapters: [
          'Chapter 1: Reading Comprehension and Critical Analysis',
          'Chapter 2: Grammar and Language Usage',
          'Chapter 3: Writing Skills and Composition',
          'Chapter 4: Literature and Literary Analysis',
          'Chapter 5: Speaking and Listening Skills',
          'Chapter 6: Research and Academic Writing'
        ]
      },
      { 
        name: 'Civics', 
        icon: Scale, 
        chapters: [
          'Chapter 1: Principles of Democracy',
          'Chapter 2: Constitutional Government',
          'Chapter 3: Rule of Law and Human Rights',
          'Chapter 4: Citizenship and Civic Participation',
          'Chapter 5: Political Parties and Elections',
          'Chapter 6: International Relations and Organizations'
        ]
      },
      { 
        name: 'Physical Education', 
        icon: Activity, 
        chapters: [
          'Chapter 1: Health and Wellness',
          'Chapter 2: Exercise Physiology',
          'Chapter 3: Sports and Games',
          'Chapter 4: Physical Fitness and Training',
          'Chapter 5: Sports Psychology',
          'Chapter 6: Sports Management and Organization'
        ]
      },
      { 
        name: 'Mathematics', 
        icon: Calculator, 
        chapters: [
          'Unit 1: Sequence and Series',
          'Unit 2: Introduction to Calculus',
          'Unit 3: Statistics',
          'Unit 4: Introduction to Linear Programming',
          'Unit 5: Mathematical Application in Business'
        ]
      },
      { 
        name: 'IT', 
        icon: Laptop, 
        chapters: [
          'Chapter 1: Computer Systems and Architecture',
          'Chapter 2: Operating Systems',
          'Chapter 3: Programming Fundamentals',
          'Chapter 4: Database Management Systems',
          'Chapter 5: Computer Networks and Internet',
          'Chapter 6: Web Development',
          'Chapter 7: Computer Security',
          'Chapter 8: Emerging Technologies'
        ]
      },
      { 
        name: 'National Language', 
        icon: Languages, 
        chapters: [
          'Chapter 1: Amharic Grammar and Syntax',
          'Chapter 2: Classical Amharic Literature',
          'Chapter 3: Modern Amharic Literature',
          'Chapter 4: Poetry and Prose Analysis',
          'Chapter 5: Creative Writing',
          'Chapter 6: Cultural and Historical Context'
        ]
      }
    ]
  };

  const stats = [
    { icon: Trophy, label: 'Completed', value: '10/14', color: 'text-yellow-500' },
    { icon: Star, label: 'Average Score', value: '89%', color: 'text-blue-500' },
    { icon: Clock, label: 'Study Time', value: '67h', color: 'text-green-500' },
    { icon: BookOpen, label: 'Total Subjects', value: '14', color: 'text-purple-500' }
  ];

  const getSubjectProgress = (subjectName: string) => {
    const mockData = {
      'Mathematics': { completed: 8, total: 12, percentage: 67 },
      'Physics': { completed: 6, total: 9, percentage: 67 },
      'Chemistry': { completed: 7, total: 9, percentage: 78 },
      'Biology': { completed: 5, total: 7, percentage: 71 },
      'Technical Drawing': { completed: 4, total: 7, percentage: 57 },
      'Geography': { completed: 6, total: 8, percentage: 75 },
      'History': { completed: 7, total: 8, percentage: 88 },
      'Economics': { completed: 5, total: 9, percentage: 56 },
      'General Business': { completed: 6, total: 8, percentage: 75 },
      'English': { completed: 5, total: 6, percentage: 83 },
      'Civics': { completed: 4, total: 6, percentage: 67 },
      'Physical Education': { completed: 5, total: 6, percentage: 83 },
      'IT': { completed: 6, total: 8, percentage: 75 },
      'National Language': { completed: 4, total: 6, percentage: 67 }
    };
    return mockData[subjectName as keyof typeof mockData] || { completed: 0, total: 10, percentage: 0 };
  };

  const handleSelectQuiz = (quiz: any) => {
    console.log('Quiz selected:', quiz);
    // Navigate to quiz interface or handle quiz selection
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl"></div>
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
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Grade 12</h1>
                <p className="text-gray-400">University entrance preparation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
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
                <span>Grade 12 Progress</span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Final year - University entrance preparation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Progress</span>
                  <span>71%</span>
                </div>
                <Progress value={71} className="h-2" />
                <p className="text-xs text-gray-400">10 out of 14 subjects completed</p>
              </div>
            </CardContent>
          </Card>

          {/* Natural Science Stream */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-white">📘 Natural Science Stream</h2>
              <Badge variant="secondary" className="ml-3 bg-blue-100 text-blue-800">
                {grade12Subjects.naturalScience.length} subjects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade12Subjects.naturalScience.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={12}
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
                {grade12Subjects.socialScience.length} subjects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade12Subjects.socialScience.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={12}
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
                {grade12Subjects.common.length} subjects
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {grade12Subjects.common.map((subject, index) => (
                <SubjectCard
                  key={index}
                  subject={subject}
                  progress={getSubjectProgress(subject.name)}
                  grade={12}
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

export default Grade12;
