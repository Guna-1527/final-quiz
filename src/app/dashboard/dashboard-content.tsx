"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Trophy, BarChart, ListChecks } from "lucide-react";
import { useRouter } from "next/navigation";

const mockPerformanceData = [
  { name: "Quiz 1", score: 75 },
  { name: "Quiz 2", score: 82 },
  { name: "Quiz 3", score: 91 },
  { name: "Quiz 4", score: 78 },
  { name: "Quiz 5", score: 88 },
];

export default function DashboardContent() {
  const router = useRouter();

  return (
    <div>
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-2">
            <BarChart className="text-blue-500" size={24} />
            <CardTitle>Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-blue-600">84%</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-2">
            <ListChecks className="text-green-500" size={24} />
            <CardTitle>Total Quizzes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">12</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition">
          <CardHeader className="flex items-center gap-2">
            <Trophy className="text-yellow-500" size={24} />
            <CardTitle>Best Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-yellow-600">97%</p>
          </CardContent>
        </Card>
      </div>

      {/* Performance Graph */}
      <Card className="shadow-lg border border-gray-200 hover:shadow-xl transition mb-8">
        <CardHeader>
          <CardTitle>Performance Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockPerformanceData}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Take New Quiz Button */}
      <div className="mt-8 text-center">
        <Button
          onClick={() => router.push("/quiz")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Take a New Quiz
        </Button>
      </div>
    </div>
  );
}
