
import { supabase } from '@/integrations/supabase/client';

export interface Subject {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Chapter {
  id: string;
  name: string;
  description?: string;
  subject_id: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export const getSubjects = async (): Promise<Subject[]> => {
  const { data, error } = await supabase
    .from('subjects')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching subjects:', error);
    return [];
  }

  return data || [];
};

export const getChaptersBySubject = async (subjectId: string): Promise<Chapter[]> => {
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('subject_id', subjectId)
    .order('order_index');

  if (error) {
    console.error('Error fetching chapters:', error);
    return [];
  }

  return data || [];
};

export const getAllChapters = async (): Promise<Chapter[]> => {
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .order('order_index');

  if (error) {
    console.error('Error fetching chapters:', error);
    return [];
  }

  return data || [];
};
