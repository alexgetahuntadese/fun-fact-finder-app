
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { GraduationCap, TrendingUp } from 'lucide-react';

interface GradeCardProps {
  grade: number;
  title: string;
  description: string;
  subjects: number;
  progress: number;
  color: string;
  onSelect: () => void;
}

const GradeCard: React.FC<GradeCardProps> = ({
  grade,
  title,
  description,
  subjects,
  progress,
  color,
  onSelect
}) => {
  return (
    <Card 
      className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
      onClick={onSelect}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white">
            {subjects} subjects
          </Badge>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Progress</span>
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium text-white">{progress}%</span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeCard;
