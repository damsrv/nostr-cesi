"use client";

import AddEvent from "@/components/AddEvent/AddEvent";
import GuessMovie from "@/components/GuessMovie/GuessMovie";
import NDKTest from "@/components/NDKTest/NDKTest";
import UserScoreTest from "@/components/UserScoreTest";
import { useNDK } from "@/hooks/useNDK";
import { NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ScoreboardMini from "../components/ScoreboardMini/ScoreboardMini";

export default function Home() {
    const [todayMovie, setTodayMovie] = useState<Movie | undefined>(undefined);
    const [score, setScore] = useState<Score | undefined>(undefined);

    const { ndk } = useNDK();
    const router = useRouter();

    const date = new Date().toISOString().split("T")[0];
    // const date = "2024-08-21";

    if (!ndk.signer) {
        router.push("/login");
    }

    useEffect(() => {
        const setMostRecentMovie = async () => {
            async function getMovieByDate(date: string) {
                const filter: NDKFilter = {
                    kinds: [NDKKind.Text],
                    "#t": [`MOVSTR--MOVIE--${date}`],
                };

                return await ndk.fetchEvent(filter);
            }

            const event = await getMovieByDate(date);
            if (event) {
                const value = JSON.parse(event.content) as Movie;
                setTodayMovie(value);
            }

            // if(user) {
            //     const decodedKey = nip19.decode(user!.npub)
            //     console.log(decodedKey)
            //     filter.authors = [decodedKey.data.toString()]
            // }
        };

        const getUserScore = async () => {
            async function getUserScore(date: string, userNpub: string) {
                const filter: NDKFilter = {
                    kinds: [NDKKind.Text],
                    "#t": [`MOVSTR--USER-SCORE--${date}--${userNpub}`],
                };

                return await ndk.fetchEvent(filter);
            }

            const user = await ndk.signer?.user();

            if(user) {
                const event = await getUserScore(
                    date,
                    user.npub
                );

                if (event) {
                    const score = JSON.parse(event.content) as Score;
                    setScore(score);
                }
            }


            // if(user) {
            //     const decodedKey = nip19.decode(user!.npub)
            //     console.log(decodedKey)
            //     filter.authors = [decodedKey.data.toString()]
            // }
        };
        setMostRecentMovie();
        getUserScore();
    }, []);

    return (
        <main className="flex min-h-screen items-start justify-between py-24 container gap-20">
            {/* <NDKTest /> */}

            {todayMovie && <GuessMovie movie={todayMovie} scores={score} />}
            <div className="w-[1px] h-[400px] py-5 bg-foreground"></div>

            <ScoreboardMini />
        </main>
    );
}
