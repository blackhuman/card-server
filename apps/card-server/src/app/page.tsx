"use client";

import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient } from '~/server/supabase-client';
import { useQuery } from '@powersync/react';
import { CARD_TABLE, CardTable } from '~/server/AppSchema';
import { toCompilableQuery } from '@powersync/drizzle-driver';
import { useSystem } from '~/server/system';

type AuthUser = { id: string; email?: string | null };

const supabase = createSupabaseClient();

const Welcome = ({ user }: { user: AuthUser }) => {
  const router = useRouter();
  
  async function onSignout() {
    await supabase.auth.signOut();
    router.push('/signin');
  }
  
  return (
    <div className="flex gap-4">
      <h3 className="text-lg">Welcome back, {user?.email}</h3>
      <button
        className="text-gray-300 underline"
        onClick={() => void onSignout()}
      >
        Signout
      </button>
    </div>
  );
};

const SigninSignup = () => {
  return (
    <div className="flex gap-4 text-2xl">
      <Link href="/signin" className="rounded-lg border px-4 py-2">
        Signin
      </Link>
      <Link href="/signup" className="rounded-lg border px-4 py-2">
        Signup
      </Link>
    </div>
  );
};

const Cards2 = ({ user }: { user: AuthUser }) => {
  const system = useSystem()
  const sql = useMemo(() => toCompilableQuery(system.dizzleDb.select().from(CardTable)), [system])
  const { data: cards } = useQuery(sql)

  return (
    <div className='space-y-4'>
      {cards?.map(v => (
        <div key={v.id} className='flex flex-row gap-8'>
          <p className='flex-1'>{v.text}</p>
          <p className='flex-1'>{v.textTranslation}</p>
        </div>
      ))}
    </div>
  )
}

const Home: NextPage = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <SigninSignup />;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <h1 className="text-5xl font-extrabold">My Awesome Blog</h1>

        <div className="flex flex-col">
          <Welcome user={user} />
          <section className="mt-10">
            <Cards2 user={user} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;