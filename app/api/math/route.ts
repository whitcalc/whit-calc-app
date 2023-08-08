import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    questions: [
      {
        id: 1,
        question: "1 + 1 = ?",
        answers: [
          {
            id: 1,
            answer: "2",
            isCorrect: true,
          },
          {
            id: 2,
            answer: "3",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "4",
            isCorrect: false,
          },
        ],
      },
      {
        id: 2,
        question: "1^2+12/2",
        answers: [
          {
            id: 1,
            answer: "2",
            isCorrect: false,
          },
          {
            id: 2,
            answer: "3",
            isCorrect: false,
          },
          {
            id: 3,
            answer: "14/2",
            isCorrect: true,
          },
        ],
      },
    ],
  });
};
