
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Sparkles } from 'lucide-react';
import SubjectCardMobile from '@/components/mobile/SubjectCardMobile';
import { 
  Calculator, 
  BookA, 
  Laptop,
  Scale,
  Dna, 
  FlaskConical, 
  Zap,
  MapPin,
  Clock8,
  DollarSign,
  Activity,
  Languages
} from 'lucide-react';

interface SubjectSelectionProps {
  user: { name: string; grade: string; school?: string };
  grade: number;
  onBack: () => void;
  onSubjectSelect: (subject: string) => void;
}

const SubjectSelection: React.FC<SubjectSelectionProps> = ({ user, grade, onBack, onSubjectSelect }) => {
  const getSubjectData = (grade: number) => {
    switch (grade) {
      case 9:
        return [
          { name: 'English', icon: BookA, chapters: ['Basic Grammar', 'Reading Comprehension', 'Writing Skills', 'Literature Introduction'] },
          { name: 'Amharic', icon: Languages, chapters: ['Grammar', 'Literature', 'Composition', 'Language Skills'] },
          { name: 'Mathematics', icon: Calculator, chapters: ['Algebra Basics', 'Linear Equations', 'Geometry Fundamentals', 'Number Systems'] },
          { name: 'Information Technology (ICT)', icon: Laptop, chapters: ['Computer Basics', 'Software Applications', 'Internet Fundamentals', 'Digital Literacy'] },
          { name: 'Civics & Ethical Education', icon: Scale, chapters: ['Citizenship', 'Ethics', 'Human Rights', 'Government Basics'] },
          { name: 'Biology', icon: Dna, chapters: ['Cell Biology', 'Plant Biology', 'Human Body Systems', 'Basic Genetics'] },
          { name: 'Chemistry', icon: FlaskConical, chapters: ['Matter & Elements', 'Chemical Reactions', 'Atomic Structure', 'Basic Compounds'] },
          { name: 'Physics', icon: Zap, chapters: ['Motion & Forces', 'Energy', 'Heat & Temperature', 'Light & Sound'] },
          { name: 'Geography', icon: MapPin, chapters: ['Physical Geography', 'Climate & Weather', 'Maps & Location', 'Human Geography'] },
          { name: 'History', icon: Clock8, chapters: ['World History', 'Ethiopian History', 'Ancient Civilizations', 'Historical Thinking'] },
          { name: 'Physical Education', icon: Activity, chapters: ['Sports & Games', 'Health Education', 'Physical Fitness', 'Body Systems'] }
        ];
      case 10:
        return [
          { name: 'English', icon: BookA, chapters: ['Literature Analysis', 'Advanced Grammar', 'Essay Writing', 'Communication Skills'] },
          { name: 'Amharic', icon: Languages, chapters: ['Advanced Grammar', 'Literature Study', 'Creative Writing', 'Language Arts'] },
          { name: 'Mathematics', icon: Calculator, chapters: ['Quadratic Functions', 'Trigonometry', 'Statistics', 'Probability'] },
          { name: 'Information Technology (ICT)', icon: Laptop, chapters: ['Programming Basics', 'Database Fundamentals', 'Web Development', 'Computer Networks'] },
          { name: 'Civics & Ethical Education', icon: Scale, chapters: ['Democracy', 'Constitutional Law', 'Social Ethics', 'Global Citizenship'] },
          { name: 'Biology', icon: Dna, chapters: ['Advanced Cell Biology', 'Genetics', 'Evolution', 'Ecology Basics'] },
          { name: 'Chemistry', icon: FlaskConical, chapters: ['Chemical Bonding', 'Organic Chemistry', 'Acids & Bases', 'Stoichiometry'] },
          { name: 'Physics', icon: Zap, chapters: ['Waves & Optics', 'Electricity', 'Magnetism', 'Thermodynamics'] },
          { name: 'Geography', icon: MapPin, chapters: ['Regional Geography', 'Environmental Geography', 'Economic Geography', 'Cartography'] },
          { name: 'History', icon: Clock8, chapters: ['Modern History', 'African History', 'Social Movements', 'Historical Analysis'] },
          { name: 'Physical Education', icon: Activity, chapters: ['Advanced Sports', 'Exercise Science', 'Health & Wellness', 'Team Leadership'] }
        ];
      case 11:
        return [
          { name: 'Mathematics', icon: Calculator, chapters: ['Advanced Algebra', 'Calculus Introduction', 'Matrices', 'Sequences & Series'] },
          { name: 'Biology', icon: Dna, chapters: ['Cell Biology', 'Genetics', 'Ecology', 'Human Biology'] },
          { name: 'Chemistry', icon: FlaskConical, chapters: ['Organic Chemistry', 'Physical Chemistry', 'Chemical Bonding', 'Reactions'] },
          { name: 'Physics', icon: Zap, chapters: ['Mechanics', 'Waves', 'Electricity', 'Optics'] },
          { name: 'English', icon: BookA, chapters: ['Literature', 'Grammar', 'Writing Skills', 'Reading Comprehension'] },
          { name: 'Geography', icon: MapPin, chapters: ['Physical Geography', 'Human Geography', 'Climate Studies', 'Regional Geography'] },
          { name: 'History', icon: Clock8, chapters: ['World History', 'Ethiopian History', 'Ancient Civilizations', 'Modern History'] },
          { name: 'Economics', icon: DollarSign, chapters: ['Microeconomics', 'Macroeconomics', 'Market Systems', 'Economic Theory'] }
        ];
      case 12:
        return [
          { name: 'Mathematics', icon: Calculator, chapters: ['Sequence and Series', 'Introduction to Calculus', 'Statistics', 'Introduction to linear programming', 'Mathematical Application in Business'] },
          { name: 'Biology', icon: Dna, chapters: ['Application of Biology', 'Microorganisms', 'Energy transformation', 'Evolution', 'Human Body System', 'Climate Change'] },
          { name: 'Chemistry', icon: FlaskConical, chapters: ['Atomic Structure and Periodic Properties', 'Chemical Bonding', 'States of Matter', 'Solutions', 'Chemical Kinetics', 'Chemical Equilibrium', 'Acids and Bases', 'Redox Reactions and Electrochemistry', 'Organic Chemistry'] },
          { name: 'Physics', icon: Zap, chapters: ['Mechanics', 'Thermal Physics', 'Oscillations and Waves', 'Electricity and Magnetism', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves', 'Optics', 'Modern Physics'] },
          { name: 'English', icon: BookA, chapters: ['Reading Comprehension and Critical Analysis', 'Grammar and Language Usage', 'Writing Skills and Composition', 'Literature and Literary Analysis', 'Speaking and Listening Skills', 'Research and Academic Writing'] },
          { name: 'Geography', icon: MapPin, chapters: ['Physical Geography of the World', 'Population and Settlement', 'Economic Geography', 'Political Geography', 'Environmental Geography', 'Regional Geography of Africa', 'Geography of Ethiopia and the Horn', 'Geographic Information Systems (GIS)'] },
          { name: 'History', icon: Clock8, chapters: ['The Ancient World', 'Medieval Period', 'The Modern World (1500-1800)', 'Age of Revolution and Nationalism', 'The 20th Century World', 'Contemporary World', 'African History', 'Ethiopian History'] },
          { name: 'Economics', icon: DollarSign, chapters: ['Introduction to Economics', 'Demand, Supply and Market Equilibrium', 'Consumer Behavior and Demand Analysis', 'Production and Cost Analysis', 'Market Structure and Pricing', 'Factor Markets', 'National Income and Economic Growth', 'Money, Banking and Monetary Policy', 'International Trade and Finance'] }
        ];
      default:
        return [];
    }
  };

  const subjects = getSubjectData(grade);

  const getSubjectProgress = (subjectName: string) => {
    const mockData = {
      'Mathematics': { completed: 8, total: 12, percentage: 67 },
      'Physics': { completed: 6, total: 9, percentage: 67 },
      'Chemistry': { completed: 7, total: 9, percentage: 78 },
      'Biology': { completed: 5, total: 7, percentage: 71 },
      'English': { completed: 5, total: 6, percentage: 83 },
      'Geography': { completed: 6, total: 8, percentage: 75 },
      'History': { completed: 7, total: 8, percentage: 88 },
      'Economics': { completed: 5, total: 9, percentage: 56 }
    };
    return mockData[subjectName as keyof typeof mockData] || { completed: 0, total: 10, percentage: 0 };
  };

  const getGreeting = () => {
    const greetings = [
      `Welcome back to Grade ${grade}, ${user.name}!`,
      `Ready to explore Grade ${grade}, ${user.name}?`,
      `Choose your favorite subject, ${user.name}!`,
      `Let's continue your Grade ${grade} journey, ${user.name}!`
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
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
                <h1 className="text-2xl font-bold">{getGreeting()}</h1>
                <p className="text-gray-400">Grade {grade} • {subjects.length} subjects available</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span className="text-sm text-gray-400">Keep it up!</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Motivational Message */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md rounded-full px-6 py-3">
              <BookOpen className="h-5 w-5 text-blue-400" />
              <span className="text-sm text-gray-300">You're doing great! Pick a subject to continue learning.</span>
            </div>
          </div>

          {/* Subject Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, index) => (
              <SubjectCardMobile
                key={index}
                subject={subject}
                progress={getSubjectProgress(subject.name)}
                grade={grade}
                onSelect={() => onSubjectSelect(subject.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectSelection;
