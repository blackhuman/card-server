"use client";
import dynamic from "next/dynamic";

const Home = dynamic(() => import('./Home'), { ssr: false });

function HomeWrapper() {
  return (
    <main>
      <Home />
    </main>
  );
}

export default HomeWrapper;