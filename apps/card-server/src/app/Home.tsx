"use client";

import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createSupabaseClient } from '~/server/supabase-client';
import { PowerSyncContext, useQuery } from '@powersync/react';
import { CARD_TABLE, CardTable } from '~/server/AppSchema';
import { toCompilableQuery } from '@powersync/drizzle-driver';
import { System, SystemContext, useSystem } from '~/server/system';
import { eq } from 'drizzle-orm';

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

const Cards = () => {
  const system = useSystem()
  const sql = useMemo(() => toCompilableQuery(system.dizzleDb.select().from(CardTable)), [system])
  const { data: cards } = useQuery(sql)

  const insertCard = useCallback(async () => {
    try {
      const { data: { session } } = await system.supabaseConnector.client.auth.getSession()
      const userId = session?.user.id
      const insertResult = await system.dizzleDb.insert(CardTable).values({
        text: 'Hello',
        textTranslation: 'Hello',
        createdById: userId,
      })
      console.log('insert result', insertResult)
    } catch (e) {
      console.error(e)
    }
  }, [system])

  const editCard = useCallback(async (id: string) => {
    try {
      const value = await system.dizzleDb.select().from(CardTable)
        .where(eq(CardTable.id, id))
        console.log('editing card', id, value)
      const updateResult = await system.dizzleDb.update(CardTable).set({
        textTranslation: 'Hello',
      }).where(eq(CardTable.id, id))
      console.log('update result', updateResult)
    } catch (e) {
      console.error(e)
    }
  }, [system])

  const deleteCard = useCallback(async (id: string) => {
    try {
      const deleteResult = await system.dizzleDb.delete(CardTable)
        .where(eq(CardTable.id, id))
      console.log('delete result', deleteResult)
    } catch (e) {
      console.error(e)
    }
  }, [system])

  return (
    <div>
      <button className="underline cursor-pointer" onClick={insertCard}>
        Insert card
      </button>
      <ul className="container mt-8 flex flex-col gap-2">
        {cards?.map((card) => (
          <li key={card.id} className="flex items-end justify-between gap-4">
            <p className={`text-2xl`}>
              <span>{card.text}</span>
              <span className='text-gray-500 text-xl pl-2'>{card.textTranslation}</span>
            </p>
            <div className="flex w-32 justify-end gap-1 text-left">
              <button className="underline cursor-pointer" onClick={() => editCard(card.id)}>
                Edit
              </button>
              <button className="underline cursor-pointer" onClick={() => deleteCard(card.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
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
            <Cards />
          </section>
        </div>
      </div>
    </main>
  );
};

function HomeWrapper() {

  const [system, setSystem] = useState<System | null>(null);
  useEffect(() => {
    async function process() {
      const system = new System();
      await system.init();
      console.log('System initialized');
      setSystem(system);
    }
    process();
  }, [])

  if (system === null) {
    console.log('System null');
    return null;
  }
  
  return (
    <SystemContext.Provider value={system}>
      <PowerSyncContext.Provider value={system.powersync}>
        <Home />
      </PowerSyncContext.Provider>
    </SystemContext.Provider>
  );
}

export default HomeWrapper
