
import { supabase } from '@/integrations/supabase/client';

export interface DatabaseQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: string;
  explanation: string;
  difficulty: string;
  chapter: {
    name: string;
  };
}

export const getQuestionsFromDatabase = async (
  subject: string, 
  chapters: string[], 
  difficulty: 'Easy' | 'Medium' | 'Hard', 
  questionCount: number = 7
): Promise<DatabaseQuestion[]> => {
  try {
    console.log('Fetching questions from database for:', { subject, chapters, difficulty, questionCount });
    
    // First get the subject ID
    const { data: subjectData, error: subjectError } = await supabase
      .from('subjects')
      .select('id')
      .eq('name', subject)
      .single();
    
    if (subjectError || !subjectData) {
      console.error('Subject not found:', subjectError);
      return [];
    }

    // Get chapter IDs for the subject
    const { data: chaptersData, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, name')
      .eq('subject_id', subjectData.id)
      .in('name', chapters);
    
    if (chaptersError || !chaptersData) {
      console.error('Chapters not found:', chaptersError);
      return [];
    }

    const chapterIds = chaptersData.map(c => c.id);
    
    // Get questions for these chapters with the specified difficulty
    const { data: questions, error: questionsError } = await supabase
      .from('quiz_questions')
      .select(`
        id,
        question,
        options,
        correct_answer,
        explanation,
        difficulty,
        chapter:chapters(name)
      `)
      .in('chapter_id', chapterIds)
      .eq('difficulty', difficulty)
      .limit(questionCount * 2); // Get more than needed to allow for shuffling
    
    if (questionsError) {
      console.error('Error fetching questions:', questionsError);
      return [];
    }

    if (!questions || questions.length === 0) {
      console.log('No questions found for the specified criteria');
      return [];
    }

    // Transform the data to match the expected format
    const transformedQuestions: DatabaseQuestion[] = questions.map(q => ({
      id: q.id,
      question: q.question,
      options: Array.isArray(q.options) ? q.options : [],
      correct_answer: q.correct_answer,
      explanation: q.explanation,
      difficulty: q.difficulty,
      chapter: {
        name: q.chapter?.name || ''
      }
    }));

    // Shuffle and limit to requested count
    const shuffled = transformedQuestions.sort(() => Math.random() - 0.5);
    const result = shuffled.slice(0, Math.min(questionCount, shuffled.length));
    
    console.log('Successfully fetched questions:', result.length);
    return result;
    
  } catch (error) {
    console.error('Error in getQuestionsFromDatabase:', error);
    return [];
  }
};
