
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Target, Trophy, Clock, BookOpen, Sparkles } from 'lucide-react';
import QuizCard from '@/components/mobile/QuizCard';

interface QuizPageProps {
  user: { name: string; grade: string; school?: string };
  grade: number;
  subject: string;
  chapter: string;
  onBack: () => void;
  onStartQuiz: (quiz: any) => void;
}

const QuizPage: React.FC<QuizPageProps> = ({ user, grade, subject, chapter, onBack, onStartQuiz }) => {
  const subjectName = subject.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const chapterName = chapter;

  // Generate quiz data based on chapter
  const generateQuizzes = () => {
    const difficulties: ('Easy' | 'Medium' | 'Hard')[] = ['Easy', 'Medium', 'Hard'];
    const quizzes = [];
    
    for (const difficulty of difficulties) {
      const duration = difficulty === 'Easy' ? 15 : difficulty === 'Medium' ? 25 : 35;
      const questions = difficulty === 'Easy' ? 10 : difficulty === 'Medium' ? 15 : 20;
      const bestScore = Math.random() > 0.5 ? Math.floor(Math.random() * 40) + 60 : undefined;
      
      quizzes.push({
        id: `${chapter}-${difficulty}`,
        title: `${chapterName} - ${difficulty}`,
        difficulty,
        duration,
        questions,
        bestScore,
        subject: subjectName,
        chapter: chapterName,
        grade: grade
      });
    }
    
    return quizzes;
  };

  const quizzes = generateQuizzes();

  const getMotivationalMessage = () => {
    const messages = [
      `Ready to test your ${subjectName} knowledge, ${user.name}?`,
      `Time to show what you've learned, ${user.name}!`,
      `Let's see how much you've mastered, ${user.name}!`,
      `Challenge yourself with these ${chapterName} quizzes!`
    ];
    return messages[Math.floor(Math.random() * messages.length)];
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
                onClick={onBack}
                className="text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">{chapterName}</h1>
                <p className="text-gray-400">{subjectName} • Grade {grade}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-400">Quiz Time!</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Motivational Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-6 py-3 mb-4">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-300">{getMotivationalMessage()}</span>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-2">Choose Your Challenge</h2>
            <p className="text-gray-400">Select a difficulty level that matches your confidence</p>
          </div>

          {/* Quiz Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">{grade}</div>
              <div className="text-sm text-gray-400">Current Grade</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <Target className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">3</div>
              <div className="text-sm text-gray-400">Quiz Options</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-white">15-35</div>
              <div className="text-sm text-gray-400">Minutes</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-md">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">
                {quizzes.filter(q => q.bestScore).length}
              </div>
              <div className="text-sm text-gray-400">Completed</div>
            </div>
          </div>

          {/* Quiz Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Available Quizzes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <QuizCard
                  key={quiz.id}
                  title={quiz.title}
                  difficulty={quiz.difficulty}
                  duration={quiz.duration}
                  questions={quiz.questions}
                  bestScore={quiz.bestScore}
                  onStart={() => onStartQuiz(quiz)}
                />
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-8 bg-white/5 backdrop-blur-md rounded-lg p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quiz Tips</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <div>
                  <strong>Take your time:</strong> Read each question carefully before answering.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                <div>
                  <strong>Review mistakes:</strong> Learn from incorrect answers to improve.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                <div>
                  <strong>Start easy:</strong> Build confidence with easier quizzes first.
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <div>
                  <strong>Stay focused:</strong> Find a quiet place to take your quiz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
