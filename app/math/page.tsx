import { InlineMath, BlockMath } from "react-katex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

async function Math() {
  const questions = await fetch("https://whit-rt.vercel.app/api/math")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.questions;
    });

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Math Readyness check</h1>
      <div className="flex gap-4 flex-col">
        {questions.map((question: any) => {
          return (
            <div key={question.id} id={question.id}>
              <Card className="min-h-[70vh]">
                <CardHeader>
                  <CardTitle className="flex flex-row items-center gap-4">
                    <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-md">
                      {question.id}
                    </span>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Math;
