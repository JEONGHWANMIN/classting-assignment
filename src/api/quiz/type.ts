export type QUIZ_TYPE = "multiple" | "boolean";
export type QUIZ_DIFFICULTY = "easy" | "medium" | "hard";

export interface QuizQuestion {
  category: string;
  type: QUIZ_TYPE;
  difficulty: QUIZ_DIFFICULTY;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizApiResponse {
  response_code: number;
  results: QuizQuestion[];
}
