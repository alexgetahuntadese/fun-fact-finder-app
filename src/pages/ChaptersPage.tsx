
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, BookOpen, Trophy, Target, Sparkles } from 'lucide-react';
import ChapterListItem from '@/components/mobile/ChapterListItem';

interface ChaptersPageProps {
  user: { name: string; grade: string; school?: string };
}

const ChaptersPage: React.FC<ChaptersPageProps> = ({ user }) => {
  const navigate = useNavigate();
  const { grade, subject } = useParams<{ grade: string; subject: string }>();
  
  const subjectName = subject?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || '';
  
  // Mock chapter data based on subject
  const getChapterData = (subject: string) => {
    const chapters = {
      'Mathematics': [
        'Algebra Basics', 'Linear Equations', 'Geometry Fundamentals', 'Number Systems',
        'Quadratic Functions', 'Trigonometry', 'Statistics', 'Probability'
      ],
      'Physics': [
        'Motion & Forces', 'Energy', 'Heat & Temperature', 'Light & Sound',
        'Waves & Optics', 'Electricity', 'Magnetism', 'Thermodynamics'
      ],
      'Chemistry': [
        'Matter & Elements', 'Chemical Reactions', 'Atomic Structure', 'Basic Compounds',
        'Chemical Bonding', 'Organic Chemistry', 'Acids & Bases', 'Stoichiometry'
      ],
      'Biology': [
        'Cell Biology', 'Plant Biology', 'Human Body Systems', 'Basic Genetics',
        'Advanced Cell Biology', 'Genetics', 'Evolution', 'Ecology Basics'
      ],
      'English': [
        'Basic Grammar', 'Reading Comprehension', 'Writing Skills', 'Literature Introduction',
        'Literature Analysis', 'Advanced Grammar', 'Essay Writing', 'Communication Skills'
      ]
    };
    
    return chapters[subject as keyof typeof chapters] || [
      'Introduction', 'Fundamentals', 'Advanced Concepts', 'Applications',
      'Practice', 'Review', 'Assessment', 'Projects'
    ];
  };

  const chapters = getChapterData(subjectName);
  
  const getChapterProgress = (index: number) => {
    // Mock progress data
    if (index < 3) return Math.floor(Math.random() * 100);
    if (index < 5) return Math.floor(Math.random() * 50);
    return 0;
  };

  const isChapterCompleted = (index: number) => {
    return index < 2; // First 2 chapters completed
  };

  const isChapterLocked = (index: number) => {
    return index > 5; // Lock chapters after 5th one
  };

  const getDifficulty = (index: number): 'Easy' | 'Medium' | 'Hard' => {
    if (index < 3) return 'Easy';
    if (index < 6) return 'Medium';
    return 'Hard';
  };

  const getEstimatedTime = (index: number) => {
    const times = ['15 min', '20 min', '25 min', '30 min', '35 min', '40 min', '45 min', '50 min'];
    return times[index % times.length];
  };

  const handleChapterSelect = (chapterIndex: number) => {
    navigate(`/quiz/${grade}/${subject}/${chapterIndex}`);
  };

  const overallProgress = Math.round((chapters.filter((_, index) => isChapterCompleted(index)).length / chapters.length) * 100);

  const getMotivationalMessage = () => {
    if (overallProgress >= 80) return "You're almost there! Keep pushing forward! 🎯";
    if (overallProgress >= 60) return "Great progress! You're on the right track! 🚀";
    if (overallProgress >= 40) return "Nice work! Keep building momentum! 💪";
    if (overallProgress >= 20) return "Good start! Every chapter brings you closer! ⭐";
    return "Begin your journey! Every expert was once a beginner! 🌟";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="p-6 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate(`/subjects/${grade}`)}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{subjectName}</h1>
                <p className="text-gray-400">Grade {grade} • {chapters.length} chapters</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-sm text-gray-400">{overallProgress}% Complete</span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Progress Overview */}
          <div className="mb-8">
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6 text-blue-400" />
                  <div>
                    <h2 className="text-xl font-bold text-white">Your Progress</h2>
                    <p className="text-gray-400">Keep up the excellent work, {user.name}!</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{overallProgress}%</div>
                  <div className="text-sm text-gray-400">Complete</div>
                </div>
              </div>
              
              <Progress value={overallProgress} className="h-3 mb-4" />
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-green-400">
                    {chapters.filter((_, index) => isChapterCompleted(index)).length}
                  </div>
                  <div className="text-xs text-gray-400">Completed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-400">
                    {chapters.filter((_, index) => !isChapterCompleted(index) && !isChapterLocked(index)).length}
                  </div>
                  <div className="text-xs text-gray-400">In Progress</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-400">
                    {chapters.filter((_, index) => isChapterLocked(index)).length}
                  </div>
                  <div className="text-xs text-gray-400">Locked</div>
                </div>
              </div>
            </div>
          </div>

          {/* Motivational Message */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-6 py-3">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-300">{getMotivationalMessage()}</span>
            </div>
          </div>

          {/* Chapters List */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white mb-4">Chapters</h2>
            {chapters.map((chapter, index) => (
              <ChapterListItem
                key={index}
                chapter={chapter}
                index={index}
                isCompleted={isChapterCompleted(index)}
                isLocked={isChapterLocked(index)}
                progress={getChapterProgress(index)}
                estimatedTime={getEstimatedTime(index)}
                difficulty={getDifficulty(index)}
                onSelect={() => handleChapterSelect(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChaptersPage;
