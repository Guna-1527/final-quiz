"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const QuizResultContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get score and total from URL
  const score = searchParams.get("score");
  const total = searchParams.get("total");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Results</h1>
        <p className="text-lg text-gray-600 mt-2">Your final score:</p>

        <div className="mt-4 text-5xl font-extrabold text-blue-600">
          {score} / {total}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <button
            onClick={() => router.push("/quiz")}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Take Another Quiz
          </button>
          <button
            onClick={() => router.push("/")}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

const QuizResult = () => {
  return (
    <Suspense fallback={<p className="text-center text-gray-500">Loading...</p>}>
      <QuizResultContent />
    </Suspense>
  );
};

export default QuizResult;
