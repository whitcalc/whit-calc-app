"use client";

import { InlineMath, BlockMath } from "react-katex";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

function Math({ params }: { params: { test_slug: string } }) {
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState([]) as any[];
  const [answers, setAnswers] = useState([]) as any[];
  const { toast } = useToast();
  const router = useRouter();
  useEffect(() => {
    async function fetchquestions() {
      const res = await fetch(
        `https://whitworth.ainsoft.org/api/quizzes/${params.test_slug}/`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setTest(data);
          setLoading(false);
        });
    }
    fetchquestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">{test.title}</h1>
      {loading ? (
        <div className="p-5 bg-background border rounded-md">
          Loading questions...
        </div>
      ) : (
        <div className="flex gap-4 flex-col">
          {RenderQuestions(test, setAnswers, answers, router)}
        </div>
      )}
    </div>
  );
}

function RenderQuestions(
  test: any,
  setAnswers: any,
  answers: any,
  router: any
) {
  return (
    <>
      {test.questions.map((question: any) => {
        return (
          <div key={question.id} id={question.id}>
            <Card className="min-h-[70vh] flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="flex flex-row items-center gap-4">
                  <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-md">
                    {question.id}
                  </span>
                  <InlineMath math={question.text} />
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
                        value={answer.text}
                        id={question.id + "-" + answer.id}
                        onChange={(e) => {
                          setAnswers([
                            ...answers.filter(
                              (a: any) => a.question !== question.id
                            ),
                            {
                              question: question.id,
                              answer: answer.id,
                              is_correct: answer.is_correct,
                            },
                          ]);
                        }}
                      />
                      <label
                        htmlFor={question.id + "-" + answer.id}
                        className="w-full"
                      >
                        <InlineMath math={answer.text} />
                      </label>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        );
      })}
      <Button
        onClick={() => {
          const score = getScore(answers);
          test.questions.length === score.length
            ? sendAnswers(answers, score, router)
            : toast({
                title: "Please answer all of the questions!",
                description: "You have not answered all of the questions!",
                variant: "destructive",
              });
        }}
      >
        Submit
      </Button>
    </>
  );
}

function sendAnswers(answers: any, score: any, router: any) {
  fetch("https://whitworth.ainsoft.org/api/answers/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      answers: answers,
      score: score,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      toast({
        title: "Your answers have been submitted!",
        description: `You scored ${score.score} out of ${score.length} (${score.percentage}%)`,
        variant: "default",
      });
      router.push(
        `/result?score=${score.score}&total=${answers.length}&test=${"Math"}`
      );
    })
    .catch((err) => {
      toast({
        title: "An error occured!",
        description: "Please try again later!",
        variant: "destructive",
      });
    });
}

function getScore(answers: any) {
  let score = 0;
  answers.forEach((answer: any) => {
    if (answer.is_correct) {
      score++;
    }
  });
  return {
    percentage: (score / answers.length) * 100,
    score,
    length: answers.length,
  };
}

export default Math;
