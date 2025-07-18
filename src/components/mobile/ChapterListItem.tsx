
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, CheckCircle, Lock, Clock, Star } from 'lucide-react';

interface ChapterListItemProps {
  chapter: string;
  index: number;
  isCompleted: boolean;
  isLocked: boolean;
  progress: number;
  estimatedTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  onSelect: () => void;
}

const ChapterListItem: React.FC<ChapterListItemProps> = ({
  chapter,
  index,
  isCompleted,
  isLocked,
  progress,
  estimatedTime,
  difficulty,
  onSelect
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
    <Card 
      className={`bg-white/10 backdrop-blur-md border-white/20 transition-all duration-300 ${
        isLocked ? 'opacity-50' : 'hover:bg-white/20 cursor-pointer transform hover:scale-105 active:scale-95'
      }`}
      onClick={!isLocked ? onSelect : undefined}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            {isCompleted ? (
              <CheckCircle className="h-8 w-8 text-green-400" />
            ) : isLocked ? (
              <Lock className="h-8 w-8 text-gray-400" />
            ) : (
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-400">{index + 1}</span>
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-medium truncate">{chapter}</h3>
              <Badge className={`text-xs ${getDifficultyColor(difficulty)}`}>
                {difficulty}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{estimatedTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3" />
                <span>4.5</span>
              </div>
            </div>
            
            {progress > 0 && (
              <div className="mt-2">
                <Progress value={progress} className="h-1" />
              </div>
            )}
          </div>
          
          {!isLocked && !isCompleted && (
            <div className="flex-shrink-0">
              <Play className="h-5 w-5 text-blue-400" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChapterListItem;
