
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, Star } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface SubjectCardMobileProps {
  subject: {
    name: string;
    icon: LucideIcon;
    chapters: string[];
  };
  progress: {
    completed: number;
    total: number;
    percentage: number;
  };
  grade: number;
  onSelect: () => void;
}

const SubjectCardMobile: React.FC<SubjectCardMobileProps> = ({
  subject,
  progress,
  grade,
  onSelect
}) => {
  const IconComponent = subject.icon;
  
  return (
    <Card 
      className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
      onClick={onSelect}
    >
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
            <IconComponent className="h-6 w-6 text-white" />
          </div>
          <Badge variant="secondary" className="bg-white/20 text-white">
            {subject.chapters.length} chapters
          </Badge>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2">{subject.name}</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm font-medium text-white">
              {progress.completed}/{progress.total} complete
            </span>
          </div>
          <Progress value={progress.percentage} className="h-2" />
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-xs text-gray-400">Est. 2-3 hours</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-xs text-gray-400">4.8</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-center">
          <div className="flex items-center space-x-2 text-white">
            <Play className="h-4 w-4" />
            <span className="text-sm font-medium">Start Learning</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SubjectCardMobile;
