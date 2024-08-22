"use client";

import { useNDK } from "@/hooks/useNDK";
import { NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GuessMovie from "@/components/GuessMovie/GuessMovie";

interface MovieByDatePageProps {
    params: {
        date: string;
    };
}
const MovieByDatePage = ({ params }: MovieByDatePageProps) => {
    const [todayMovie, setTodayMovie] = useState<Movie | undefined>(undefined);
    const [score, setScore] = useState<Score | undefined>(undefined);

    const { ndk } = useNDK();
    const router = useRouter();

    // const date = new Date().toISOString().split("T")[0];
    const date = params.date;

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

            console.log(event)
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
    }, [params.date]);
    return (
        <main className="flex min-h-screen items-start justify-between py-24 container gap-20">
            {/* <NDKTest /> */}

            {todayMovie && <GuessMovie movie={todayMovie} scores={score} />}
            {!todayMovie && (
                <h1 className="text-center w-full">
                    No movie found for this date
                </h1>
            )}
        </main>
    );
};

export default MovieByDatePage;
