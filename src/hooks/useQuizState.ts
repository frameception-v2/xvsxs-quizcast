"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export interface QuizState {
  walletAddress: string;
  currentQuestion: number;
  score: number;
  questions: Array<{
    text: string;
    options: string[];
    correctAnswer: string;
  }>;
}

export function useQuizState() {
  const router = useRouter();
  const [state, setState] = useState<QuizState>(() => {
    // Try to recover state from URL hash first
    const hashState = typeof window !== "undefined" && window.location.hash.slice(1);
    if (hashState) {
      try {
        return JSON.parse(decodeURIComponent(hashState));
      } catch (e) {
        console.error("Failed to parse hash state:", e);
      }
    }

    // Fallback to localStorage
    const savedState = typeof window !== "undefined" && localStorage.getItem("quizState");
    return savedState ? JSON.parse(savedState) : getInitialState();
  });

  useEffect(() => {
    // Update URL hash and localStorage on state changes
    const hashState = encodeURIComponent(JSON.stringify(state));
    window.location.hash = hashState;
    localStorage.setItem("quizState", JSON.stringify(state));
    router.refresh();
  }, [state, router]);

  const getInitialState = (): QuizState => ({
    walletAddress: "",
    currentQuestion: 0,
    score: 0,
    questions: [
      // Default empty question for initial state
      {
        text: "Loading questions...",
        options: ["Loading..."],
        correctAnswer: "Loading..."
      }
    ]
  });

  const validateState = (newState: QuizState) => {
    if (!/^0x[a-fA-F0-9]{40}$/.test(newState.walletAddress)) {
      throw new Error("Invalid wallet address");
    }
    if (!Array.isArray(newState.questions) || newState.questions.length === 0) {
      throw new Error("Invalid questions array");
    }
  };

  const updateState = (newState: Partial<QuizState>) => {
    setState(prev => {
      const updated = { ...prev, ...newState };
      validateState(updated);
      return updated;
    });
  };

  const resetState = () => {
    setState(getInitialState());
    window.location.hash = "";
    localStorage.removeItem("quizState");
  };

  return { quizState: state, updateQuizState: updateState, resetQuizState: resetState };
}
