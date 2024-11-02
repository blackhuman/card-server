"use client";

import { useAuth, useClerk, useUser } from '@clerk/nextjs';
import type { Phrase } from "@zenstackhq/runtime/models";
import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCreatePhrase, useDeletePhrase, useFindManyPhrase, useUpdatePhrase, useUpsertArticle } from "~/lib/hooks";
import { trpc } from "~/server/trpc";

type AuthUser = { id: string; email?: string | null };

const Welcome = ({ user }: { user: AuthUser }) => {
  const { signOut } = useClerk();
  async function onSignout() {
    await signOut({ redirectUrl: '/signin' });
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
  const { data = [] } = useFindManyPhrase({
    where: { createdById: userId },
    orderBy: { createdAt: "desc" },
  })
  return data
}

const Phrases = ({ user }: { user: AuthUser }) => {
  const { userId } = useAuth();
  if (!userId) return null;
  // Post crud hooks
  const { mutateAsync: createPhrase } = useCreatePhrase();
  const { mutateAsync: updatePhrase } = useUpdatePhrase();
  const { mutateAsync: deletePhrase } = useDeletePhrase();
  const { mutateAsync: upsertArticle } = useUpsertArticle();

  const phrases = useFindAllPhrases(userId)

  async function onCreatePhrase() {
    const articleId = 'http://127.0.0.1/resource/1'

    const text = prompt("Enter post name");
    if (text) {
      const ab = await createPhrase({ 
        data: { 
          text, 
          article: {
            connectOrCreate: {
              where: {
                id: articleId
              },
              create: {
                id: articleId,
                externalLink: articleId,
                name: articleId,
                createdById: userId!,
              }
            }
          }, 
        } 
      });
    }
  }

  async function onDelete(phrase: Phrase) {
    await deletePhrase({ where: { id: phrase.id } });
  }

  return (
    <div className="container flex flex-col text-white">
      <button
        className="rounded border border-white p-2 text-lg"
        onClick={() => void onCreatePhrase()}
      >
        + Create Phrase
      </button>

      <ul className="container mt-8 flex flex-col gap-2">
        {phrases?.map((phrase) => (
          <li key={phrase.id} className="flex items-end justify-between gap-4">
            <p className={`text-2xl`}>
              {phrase.text}
              <span className="text-lg"> by {phrase.createdById}</span>
            </p>
            <div className="flex w-32 justify-end gap-1 text-left">
              <button className="underline" onClick={() => void onDelete(phrase)}>
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
  const userHook = useUser()
  const { isLoaded, isSignedIn, user } = userHook

  if (!isLoaded || !isSignedIn) return <p>Loading ...</p>;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const authUser: AuthUser = {
    id: user.id,
    email: user.username!,
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-white">
        <h1 className="text-5xl font-extrabold">My Awesome Blog</h1>

        {authUser ? (
          // welcome & blog posts
          <div className="flex flex-col">
            <Welcome user={authUser} />
            <section className="mt-10">
              <Phrases user={authUser} />
            </section>
          </div>
        ) : (
          // if not logged in
          <SigninSignup />
        )}
      </div>
    </main>
  );
};

export default Home;