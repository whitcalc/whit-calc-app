import { InlineMath } from "react-katex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

async function Math() {
  const questions = await fetch("http://localhost:3000/api/math")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.questions;
    });
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
