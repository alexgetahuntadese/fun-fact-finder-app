
import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import SubjectCard from '@/components/SubjectCard';
import { Button } from '@/components/ui/button';
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
        const fetchedSubjects = await getSubjects();
        setSubjects(fetchedSubjects);
      } catch (err) {
        console.error('Error fetching subjects:', err);
        setError('Failed to load subjects. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center py-8">
            <div className="text-lg">Loading subjects...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="max-w-md mx-auto">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-6 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Grades
          </Button>
          <div className="text-center py-8">
            <div className="text-red-600 mb-4">{error}</div>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-md mx-auto">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Grades
        </Button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Choose Your Subject
          </h1>
          <p className="text-gray-600">
            Select a subject for {grade}
          </p>
        </div>

        <div className="space-y-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              title={subject.name}
              description={subject.description || `Study ${subject.name} concepts and practice questions`}
              onClick={() => onSubjectSelect(subject.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
