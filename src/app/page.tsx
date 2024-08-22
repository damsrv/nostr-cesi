"use client"

import AddEvent from "@/components/AddEvent/AddEvent";
import GuessMovie from "@/components/GuessMovie/GuessMovie";
import NDKTest from "@/components/NDKTest/NDKTest";
import { useNDK } from "@/hooks/useNDK";
import { NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [todayMovie, setTodayMovie] = useState<Movie | undefined>(undefined)
  const [score, setScore] = useState<{ score: number, found: boolean } | undefined>(undefined);

  const { ndk } = useNDK();
  const router = useRouter()

  // const date = new Date().toISOString().split("T")[0];
  const date = "2024-08-21";

  useEffect(() => {
    async function getUserScore(date: string, userNpub: string) {
      const filter: NDKFilter = {
        kinds: [NDKKind.Text],
        "#t": [`MOVSTR--USER-SCORE--${date}--${userNpub}`],
      };

      return await ndk.fetchEvent(filter);
    }

    async function getMovieByDate() {
      const filter: NDKFilter = {
        kinds: [NDKKind.Text],
        "#t": [`MOVSTR--MOVIE--${date}`],
      };

      let movie: Movie | undefined = undefined;

      const event = await ndk.fetchEvent(filter);

      if (event) {
        movie = JSON.parse(event.content);
        console.log(movie)
        setTodayMovie(movie)
      }

      if (movie) {
        const user = await ndk.signer?.user();

        if (user) {
          const userScoreEvent = await getUserScore(date, user.npub)

          if(userScoreEvent) {
            const userScore = JSON.parse(userScoreEvent!.content)
            setScore(userScore);
          }
        }
      }
    }

    getMovieByDate()
  }, [])



  if (!ndk.signer) {
    router.push("/login")
  }

  return (
    <main className="flex min-h-screen justify-between items-start py-24 container gap-20">
      {/* <NDKTest />
      <AddEvent date={"2024-08-21"} /> */}
      {todayMovie &&
        <GuessMovie movie={todayMovie} score={score} />
      }
    </main>
  );
}
