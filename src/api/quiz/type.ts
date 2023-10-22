export interface QuizQuestion {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizApiResponse {
  response_code: number;
  results: QuizQuestion[];
}
