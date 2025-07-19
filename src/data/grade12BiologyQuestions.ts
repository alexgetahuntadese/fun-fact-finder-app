
export interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

export const grade12BiologyQuestions: { [unit: string]: { [difficulty: string]: Question[] } } = {
  'Unit 1: Application of Biology': {
    easy: [],
    medium: [],
    hard: []
  },
  'Unit 2: Microorganisms': {
    easy: [],
    medium: [],
    hard: []
  },
  'Unit 3: Energy transformation': {
    easy: [],
    medium: [],
    hard: []
  },
  'Unit 4: Evolution': {
    easy: [],
    medium: [],
    hard: []
  },
  'Unit 5: Human Body System': {
    easy: [],
    medium: [],
    hard: []
  },
  'Unit 6: Climate Change': {
    easy: [],
    medium: [],
    hard: []
  }
};

export const getGrade12BiologyQuestions = (unit: string, difficulty: 'easy' | 'medium' | 'hard'): Question[] => {
  console.log('Getting Grade 12 Biology questions for:', { unit, difficulty });
  
  if (grade12BiologyQuestions[unit] && grade12BiologyQuestions[unit][difficulty]) {
    return grade12BiologyQuestions[unit][difficulty];
  }
  
  console.log('No questions found for:', unit, difficulty);
  console.log('Available units:', Object.keys(grade12BiologyQuestions));
  return [];
};
