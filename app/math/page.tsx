import { InlineMath } from "react-katex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

async function Math() {
  const questions = [
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
  ];
  console.log(questions);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Math Readyness check</h1>
      <div className="flex gap-4 flex-col">
        {questions.map((question: any) => {
          return (
            <Card key={question.id}>
              <CardHeader>
                <CardTitle>
                  <InlineMath math={question.question} />
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                {question.answers.map((answer: any) => {
                  return (
                    <div
                      key={answer.id}
                      className="flex items-center gap-2 p-4 bg-secondary rounded-md"
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={answer.answer}
                        id={question.id + "-" + answer.id}
                      />
                      <label
                        htmlFor={question.id + "-" + answer.id}
                        className="w-full"
                      >
                        <InlineMath math={answer.answer} />
                      </label>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Math;
