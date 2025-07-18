import { supabase } from '@/integrations/supabase/client';

export interface Subject {
  id: string;
  name: string;
  description: string;
}

export interface Chapter {
  id: string;
  name: string;
  description: string;
  subject_id: string;
  order_index: number;
}

export const getSubjects = async (): Promise<Subject[]> => {
  try {
    console.log('Fetching all subjects from database...');
    
    const { data: subjects, error } = await supabase
      .from('subjects')
      .select('id, name, description')
      .order('name');
    
    if (error) {
      console.error('Error fetching subjects:', error);
      return [];
    }

    console.log('Successfully fetched subjects:', subjects?.length || 0);
    return subjects || [];
    
  } catch (error) {
    console.error('Error in getSubjects:', error);
    return [];
  }
};

export const getChaptersBySubject = async (subjectName: string): Promise<Chapter[]> => {
  try {
    console.log('Fetching chapters for subject:', subjectName);
    
    // First get the subject ID
    const { data: subjectData, error: subjectError } = await supabase
      .from('subjects')
      .select('id')
      .eq('name', subjectName)
      .single();
    
    if (subjectError || !subjectData) {
      console.error('Subject not found:', subjectError);
      return [];
    }

    // Get chapters for this subject
    const { data: chapters, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, name, description, subject_id, order_index')
      .eq('subject_id', subjectData.id)
      .order('order_index');
    
    if (chaptersError) {
      console.error('Error fetching chapters:', chaptersError);
      return [];
    }

    console.log('Successfully fetched chapters:', chapters?.length || 0);
    return chapters || [];
    
  } catch (error) {
    console.error('Error in getChaptersBySubject:', error);
    return [];
  }
};
