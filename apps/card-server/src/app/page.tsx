"use client";

import { type NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { 
  useCreateCard, useDeleteCard, useFindManyCard, useUpdateCard, 
  useUpsertArticle,
  Card
} from "@card-server/client";
import { createSupabaseClient } from '~/server/supabase-client';

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

function useFindAllPhrases(userId: string) {

  // const { data: collections = [] } = useFindManyCollection({
  //   include: { createdBy: true, articles: { include: { phrases: true}} },
  //   orderBy: { createdAt: "desc" },
  // })
  // return collections.flatMap(v => v.articles).flatMap(v => v.phrases)
  const { data = [] } = useFindManyCard({
    where: { createdById: userId },
    orderBy: { createdAt: "desc" },
  })
  return data
}

const Cards = ({ user }: { user: AuthUser }) => {
  const { id: userId } = user;
  // Post crud hooks
  const { mutateAsync: createCard } = useCreateCard();
  const { mutateAsync: updateCard } = useUpdateCard();
  const { mutateAsync: deleteCard } = useDeleteCard();
  const { mutateAsync: upsertArticle } = useUpsertArticle();

  const { data: cards} = useFindManyCard()

  async function onCreateCard() {
    const articleId = 'http://127.0.0.1/resource/1'

    const text = prompt("Enter post name");
    if (text) {
      const ab = await createCard({ 
        data: { 
          text, 
        } 
      });
    }
  }

  async function onDelete(card: Card) {
    await deleteCard({ where: { id: card.id } });
  }

  return (
    <div className="container flex flex-col text-white">
      <button
        className="rounded border border-white p-2 text-lg"
        onClick={() => void onCreateCard()}
      >
        + Create Card
      </button>

      <ul className="container mt-8 flex flex-col gap-2">
        {cards?.map((card) => (
          <li key={card.id} className="flex items-end justify-between gap-4">
            <p className={`text-2xl`}>
              {card.text}
              <span className="text-lg"> by {card.createdById}</span>
            </p>
            <div className="flex w-32 justify-end gap-1 text-left">
              <button className="underline" onClick={() => void onDelete(card)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
            <Cards user={user} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;