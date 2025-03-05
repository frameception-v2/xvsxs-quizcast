export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface QuizState {
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  status: 'idle' | 'playing' | 'correct' | 'incorrect' | 'finished';
  walletAddress: string;
  score: number;
  error?: string;
}
