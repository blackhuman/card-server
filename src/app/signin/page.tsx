"use client";

import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { createSupabaseClient } from '~/server/supabase-client';

const Signin: NextPage = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const supabase = createSupabaseClient();

  async function signInWithGoogle() {
    try {
      setIsLoading(true);
      setError(null);
      
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: `${window.location.origin}/auth/callback`
        }
      });

      if (error) {
        setError(error.message);
        return;
      }

    } catch (err) {
      setError("Failed to sign in with Google");
      console.error("Google sign in error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-5xl font-extrabold text-white mb-8">Login</h1>
      
      {error && (
        <div className="text-red-500 text-sm text-center mb-4">{error}</div>
      )}

      <button
        onClick={signInWithGoogle}
        disabled={isLoading}
        className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image
          src="/google.svg"
          alt="Google logo"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>
    </div>
  );
};

export default Signin;