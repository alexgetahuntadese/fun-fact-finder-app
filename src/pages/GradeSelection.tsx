
import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, Sparkles, TrendingUp } from 'lucide-react';
import GradeCard from '@/components/mobile/GradeCard';

interface GradeSelectionProps {
  user: { name: string; grade: string; school?: string };
  onLogout: () => void;
  onGradeSelect: (grade: string) => void;
}

const GradeSelection: React.FC<GradeSelectionProps> = ({ user, onLogout, onGradeSelect }) => {
  const gradeCards = [
    {
      grade: "9",
      title: 'Grade 9',
      description: 'Foundation courses for secondary education',
      subjects: 11,
      progress: 75,
      color: 'from-blue-500 to-purple-500'
    },
    {
      grade: "10",
      title: 'Grade 10',
      description: 'Advanced secondary education preparation',
      subjects: 11,
      progress: 60,
      color: 'from-green-500 to-blue-500'
    },
    {
      grade: "11",
      title: 'Grade 11',
      description: 'Pre-university level studies',
      subjects: 14,
      progress: 40,
      color: 'from-purple-500 to-pink-500'
    },
    {
      grade: "12",
      title: 'Grade 12',
      description: 'University entrance preparation',
      subjects: 14,
      progress: 25,
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-to-r from-green-500 to-yellow-500 text-white">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">Choose your grade, {user.name}!</h1>
                <p className="text-gray-400">Ready to continue your learning journey?</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={onLogout}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>

        <div className="p-6">
          {/* Motivational Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">125</div>
              <div className="text-sm text-gray-400">Quizzes Completed</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">89%</div>
              <div className="text-sm text-gray-400">Average Score</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">7</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">7</div>
              <div className="text-sm text-gray-400">Day Streak</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
              </div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-sm text-gray-400">Subjects Mastered</div>
            </div>
          </div>

          {/* Grade Selection Cards */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Select Your Grade</h2>
              <p className="text-gray-400">Each grade brings new challenges and opportunities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gradeCards.map((grade) => (
                <GradeCard
                  key={grade.grade}
                  grade={grade.grade}
                  title={grade.title}
                  description={grade.description}
                  subjects={grade.subjects}
                  progress={grade.progress}
                  color={grade.color}
                  onSelect={() => onGradeSelect(grade.grade)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GradeSelection;
