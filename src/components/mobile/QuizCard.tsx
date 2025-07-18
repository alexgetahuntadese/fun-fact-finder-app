
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Clock, Trophy, Target } from 'lucide-react';

interface QuizCardProps {
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  duration: number;
  questions: number;
  bestScore?: number;
  onStart: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  difficulty,
  duration,
  questions,
  bestScore,
  onStart
}) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hard': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge className={`${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </Badge>
          {bestScore && (
            <div className="flex items-center space-x-1">
              <Trophy className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">{bestScore}%</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Duration</span>
            </div>
            <span className="text-white font-medium">{duration} min</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-1">
              <Target className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Questions</span>
            </div>
            <span className="text-white font-medium">{questions}</span>
          </div>
        </div>
        
        <Button 
          onClick={onStart}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3 transform hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Play className="mr-2 h-4 w-4" />
          Start Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizCard;
