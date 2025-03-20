"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Handle Email Sign In
  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      alert("Login successful!");
      router.push("/dashboard"); // Redirect to Dashboard after login
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Welcome Back!
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Sign in to continue your quiz journey
        </p>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:border-blue-500"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mt-4 border rounded-lg focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-300"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-gray-600 text-center mt-4">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
