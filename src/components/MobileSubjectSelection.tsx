
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Calculator, 
  Microscope, 
  Globe, 
  Atom, 
  Dna, 
  FlaskConical, 
  Zap, 
  MapPin, 
  Clock8, 
  DollarSign, 
  Briefcase, 
  BookA, 
  Scale, 
  Activity, 
  Laptop, 
  Languages,
  Star,
  TrendingUp,
  Heart,
  Sparkles
} from 'lucide-react';

interface MobileSubjectSelectionProps {
  user: { name: string; grade: string; school?: string };
  onSelectSubject: (subject: any) => void;
  onBack: () => void;
}

const MobileSubjectSelection = ({ user, onSelectSubject, onBack }: MobileSubjectSelectionProps) => {
  const [selectedStream, setSelectedStream] = useState<'natural' | 'social' | null>(null);
  const [animationDelay, setAnimationDelay] = useState(0);

  const timeOfDay = new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening';
  const greetings = {
    morning: `Good morning, ${user.name}! Ready to explore today? ☀️`,
    afternoon: `Good afternoon, ${user.name}! Let's dive into learning! 📚`,
    evening: `Good evening, ${user.name}! Time for some study magic! ✨`
  };

  const subjectMotivations = {
    Biology: "Discover the wonders of life! 🧬",
    Chemistry: "Mix, react, and create! ⚗️", 
    Physics: "Unlock the secrets of the universe! 🌌",
    Mathematics: "Numbers are your superpower! 🔢",
    Geography: "Explore our amazing world! 🌍",
    History: "Time travel through stories! ⏰",
    Economics: "Master the world of business! 💼",
    English: "Words have infinite power! ✍️"
  };

  const naturalScienceSubjects = [
    { 
      name: 'Biology', 
      icon: Dna, 
      color: 'from-green-400 to-emerald-500',
      chapters: 6,
      progress: 78,
      illustration: '🧬',
      motivation: subjectMotivations.Biology
    },
    { 
      name: 'Chemistry', 
      icon: FlaskConical, 
      color: 'from-blue-400 to-cyan-500',
      chapters: 9,
      progress: 65,
      illustration: '⚗️',
      motivation: subjectMotivations.Chemistry
    },
    { 
      name: 'Physics', 
      icon: Zap, 
      color: 'from-purple-400 to-violet-500',
      chapters: 9,
      progress: 72,
      illustration: '⚡',
      motivation: subjectMotivations.Physics
    },
    { 
      name: 'Mathematics', 
      icon: Calculator, 
      color: 'from-orange-400 to-red-500',
      chapters: 5,
      progress: 85,
      illustration: '🔢',
      motivation: subjectMotivations.Mathematics
    }
  ];

  const socialScienceSubjects = [
    { 
      name: 'Geography', 
      icon: MapPin, 
      color: 'from-teal-400 to-cyan-500',
      chapters: 8,
      progress: 60,
      illustration: '🌍',
      motivation: subjectMotivations.Geography
    },
    { 
      name: 'History', 
      icon: Clock8, 
      color: 'from-amber-400 to-orange-500',
      chapters: 8,
      progress: 70,
      illustration: '📜',
      motivation: subjectMotivations.History
    },
    { 
      name: 'Economics', 
      icon: DollarSign, 
      color: 'from-emerald-400 to-green-500',
      chapters: 9,
      progress: 55,
      illustration: '💰',
      motivation: subjectMotivations.Economics
    },
    { 
      name: 'General Business', 
      icon: Briefcase, 
      color: 'from-indigo-400 to-purple-500',
      chapters: 8,
      progress: 68,
      illustration: '💼',
      motivation: "Build your business empire! 🏢"
    }
  ];

  const commonSubjects = [
    { 
      name: 'English', 
      icon: BookA, 
      color: 'from-rose-400 to-pink-500',
      chapters: 6,
      progress: 80,
      illustration: '📖',
      motivation: subjectMotivations.English
    },
    { 
      name: 'Amharic', 
      icon: Languages, 
      color: 'from-yellow-400 to-amber-500',
      chapters: 6,
      progress: 75,
      illustration: '🇪🇹',
      motivation: "Master your beautiful language! 🗣️"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimationDelay(100), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleSubjectSelect = (subject: any) => {
    onSelectSubject({
      ...subject,
      chapters: Array.from({ length: subject.chapters }, (_, i) => `Chapter ${i + 1}`)
    });
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'text-green-500';
    if (progress >= 60) return 'text-yellow-500';
    if (progress >= 40) return 'text-orange-500';
    return 'text-red-500';
  };

  const renderSubjectCard = (subject: any, index: number) => (
    <Card 
      key={subject.name}
      className="bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer animate-fade-in group"
      style={{ animationDelay: `${animationDelay + index * 100}ms` }}
      onClick={() => handleSubjectSelect(subject)}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-full bg-gradient-to-r ${subject.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <subject.icon className="h-6 w-6 text-white" />
          </div>
          <div className="text-3xl animate-pulse">{subject.illustration}</div>
        </div>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Welcome back to {subject.name}, {user.name}! 
            </h3>
            <p className="text-sm text-gray-600 font-medium">
              {subject.motivation}
            </p>
          </div>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <BookOpen className="h-3 w-3" />
              <span>{subject.chapters} chapters</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3 text-yellow-500" />
              <span className={getProgressColor(subject.progress)}>
                {subject.progress}%
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Your progress</span>
              <span className={`font-semibold ${getProgressColor(subject.progress)}`}>
                {subject.progress}% complete
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-1000 ease-out`}
                style={{ width: `${subject.progress}%` }}
              />
            </div>
          </div>

          <Button 
            className={`w-full bg-gradient-to-r ${subject.color} hover:opacity-90 text-white font-semibold shadow-md border-0`}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Continue Learning
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const renderStreamSelector = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">
          Choose Your Learning Path 🎯
        </h2>
        <p className="text-gray-300">
          Which subjects excite you most?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <Card 
          className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          onClick={() => setSelectedStream('natural')}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <Microscope className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Natural Science 🔬</h3>
                <p className="text-sm text-gray-300">Biology, Chemistry, Physics & Math</p>
              </div>
              <div className="text-2xl">🧬</div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
          onClick={() => setSelectedStream('social')}
        >
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Social Science 🌍</h3>
                <p className="text-sm text-gray-300">Geography, History, Economics & Business</p>
              </div>
              <div className="text-2xl">📚</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSubjects = () => {
    const subjects = selectedStream === 'natural' ? naturalScienceSubjects : socialScienceSubjects;
    const streamTitle = selectedStream === 'natural' ? 'Natural Science' : 'Social Science';
    const streamEmoji = selectedStream === 'natural' ? '🔬' : '🌍';

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedStream(null)}
            className="text-white hover:bg-white/10"
          >
            ← Back
          </Button>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{streamEmoji}</span>
            <h2 className="text-xl font-bold text-white">{streamTitle}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {subjects.map((subject, index) => renderSubjectCard(subject, index))}
        </div>

        {/* Common Subjects */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Heart className="mr-2 h-5 w-5 text-red-400" />
            Essential Subjects
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {commonSubjects.map((subject, index) => renderSubjectCard(subject, index + subjects.length))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 p-4 pb-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 pt-4">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white hover:bg-white/10"
          >
            ← Dashboard
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm">
              {user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Greeting */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-white mb-2">
            {greetings[timeOfDay]}
          </h1>
          <p className="text-gray-300 flex items-center justify-center">
            <TrendingUp className="mr-2 h-4 w-4 text-green-400" />
            Grade {user.grade} • Keep up the amazing work!
          </p>
        </div>

        {/* Content */}
        {!selectedStream ? renderStreamSelector() : renderSubjects()}

        {/* Motivational footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-400 flex items-center justify-center">
            <Sparkles className="mr-1 h-4 w-4 text-yellow-400" />
            Every chapter brings you closer to your dreams!
            <Sparkles className="ml-1 h-4 w-4 text-yellow-400" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileSubjectSelection;
