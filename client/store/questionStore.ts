import { create } from "zustand";

interface QuestionState {
  current_questions: Question[] | [];
  setCurrentQuestions: (questions: Question[]) => void;
}

export const useQuestionStore = create<QuestionState>((set) => ({
  current_questions: [],
  setCurrentQuestions: (questions: Question[]) =>
    set({ current_questions: questions }),
}));
