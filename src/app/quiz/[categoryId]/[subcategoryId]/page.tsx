"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase";
import QuizLayout from "../../../layout";

interface Question {
  id: string;
  question_text: string;
  correct_answer: string;
  incorrect_answer_1: string;
  incorrect_answer_2: string;
  incorrect_answer_3: string;
}

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const { categoryId, subcategoryId } = params || {};

  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        console.log("📡 Fetching questions for:", { categoryId, subcategoryId });

        const { data, error } = await supabase
          .from("questions")
          .select("id, question_text, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3")
          .eq("subcategory_id", subcategoryId);

        if (error) {
          throw new Error(error.message);
        }

        setQuestions(data || []);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [categoryId, subcategoryId]); // ✅ Fixed missing dependency warning

  const handleAnswerSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const finalScore = questions.reduce(
      (score, q) => score + (selectedAnswers[q.id] === q.correct_answer ? 1 : 0),
      0
    );

    // ✅ No need to setScore(finalScore) since it's not used

    // Navigate to the result page with query params
    router.push(`/quiz/result?score=${encodeURIComponent(finalScore)}&total=${encodeURIComponent(questions.length)}`);
  };

  if (loading) {
    return (
      <QuizLayout>
        <p className="text-center text-gray-500">Loading questions...</p>
      </QuizLayout>
    );
  }

  if (error) {
    return (
      <QuizLayout>
        <div className="text-center">
          <p className="text-red-500">Error: {error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </QuizLayout>
    );
  }

  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Quiz Questions</h1>

        {questions.length > 0 ? (
          questions.map((question) => (
            <div key={question.id} className="mb-6 border-b pb-4">
              <h2 className="text-lg font-semibold mb-2">{question.question_text}</h2>
              <div className="grid grid-cols-2 gap-4">
                {[question.correct_answer, question.incorrect_answer_1, question.incorrect_answer_2, question.incorrect_answer_3].map((answer, index) => (
                  <button
                    key={index}
                    className={`p-3 border rounded-md text-left ${
                      selectedAnswers[question.id] === answer ? "bg-blue-500 text-white" : "bg-gray-100"
                    }`}
                    onClick={() => handleAnswerSelect(question.id, answer)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No questions available for this subcategory.</p>
        )}

        {questions.length > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-500 text-white font-bold rounded-md"
            >
              Submit Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
