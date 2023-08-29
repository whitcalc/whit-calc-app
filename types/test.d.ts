type Test = {
  id?: number;
  title?: string;
  slug?: string;
  questions?: Question[];
  instructions?: string;
  duration_in_minutes?: number;
  shuffle_questions?: boolean;
  shuffle_answers?: boolean;
  passing_score?: number;
  success_text?: string;
  fail_text?: string;
};

type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

type Answer = {
  id: number;
  text: string;
};

export type { Test, Question, Answer };
