import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getSubjects, Subject } from '@/utils/supabaseData';

interface SubjectSelectionProps {
  grade: string;
  onBack: () => void;
  onSubjectSelect: (subject: string) => void;
}

const SubjectSelection: React.FC<SubjectSelectionProps> = ({
  grade,
  onBack,
  onSubjectSelect
}) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedSubjects = await getSubjects(grade);
        setSubjects(fetchedSubjects);
      } catch (err) {
        console.error('Error fetching subjects:', err);
        setError('Failed to load subjects. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, [grade]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center py-8">
            <div className="text-lg text-white">Loading subjects...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-md mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 text-white hover:text-gray-200 hover:bg-white/20"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Grades
          </Button>
          <div className="text-center py-8">
            <div className="text-red-400 mb-4">{error}</div>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-md mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-white hover:text-gray-200 hover:bg-white/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Grades
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            Choose Your Subject
          </h1>
          <p className="text-blue-200">
            Select a subject for Grade {grade}
          </p>
        </div>

        <div className="space-y-4">
          {subjects.map((subject) => (
            <Card
              key={subject.id}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              onClick={() => onSubjectSelect(subject.name)}
            >
              <CardContent className="p-4">
                <h3 className="font-semibold text-white mb-2">
                  {subject.name}
                </h3>
                <p className="text-sm text-blue-200">
                  {subject.description || `Study ${subject.name} concepts and practice questions`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
