"use client"

import AddEvent from "@/components/AddEvent/AddEvent";
import NDKTest from "@/components/NDKTest/NDKTest";
import { useNDK } from "@/hooks/useNDK";
import { useRouter } from "next/navigation";

export default function Home() {
  const { ndk } = useNDK();
  const router = useRouter()

  const date = new Date().toLocaleDateString();

  if (!ndk.signer) {
    router.replace("/login")
  }

  return (
    <main className="flex min-h-screen justify-center items-center">
      <NDKTest />
      <AddEvent date={date}/>
    </main>
  );
}