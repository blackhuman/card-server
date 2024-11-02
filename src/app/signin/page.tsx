"use client";

import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function onSignin(e: SubmitEvent) {
    e.preventDefault();

    const result = await signIn("credentials", {
      callbackUrl: 'chrome-extension://hlcdfnkcfhpffaepmcalaagicamakfon/tabs/index.html',
      redirect: false,
      email,
      password,
    });

    console.log('onSignin result', result)

    if (result?.ok) {
      console.log('result.url', result.url)
      router.push("/");
    } else {
      alert("Signin failed");
    }
  }

  function rawSignIn(e: SubmitEvent) {
    e.preventDefault()
    return signIn("credentials", {
      callbackUrl: 'chrome-extension://hlcdfnkcfhpffaepmcalaagicamakfon/tabs/index.html',
      redirect: true,
      email,
      password,
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <h1 className="text-5xl font-extrabold text-white">Login</h1>
      <form
        className="mt-16 flex flex-col gap-8 text-2xl"
        onSubmit={(e) => void rawSignIn(e)}
      >
        <div>
          <label htmlFor="email" className="inline-block w-32  text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="inline-block w-32  text-white">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="ml-4 w-72 rounded border p-2"
          />
        </div>
        <input
          type="submit"
          value="Sign me in"
          className="cursor-pointer rounded border border-gray-500 py-4 text-white"
        />
      </form>
    </div>
  );
};

export default Signin;