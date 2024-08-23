"use client";

import AddEvent from "@/components/AddEvent/AddEvent";
import GuessMovie from "@/components/GuessMovie/GuessMovie";
import NDKTest from "@/components/NDKTest/NDKTest";
import UserScoreTest from "@/components/UserScoreTest";
import { useNDK } from "@/hooks/useNDK";
import { NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const MovieCard = ({
    day,
    month,
    year,
    setMovieCount,
    movieCount,
}: {
    day: number;
    month: number;
    year: number;
    setMovieCount: any;
    movieCount: number;
}) => {
    const [movie, setMovie] = useState<Movie | undefined>(undefined);
    const [score, setScore] = useState<Score | undefined>(undefined);
    const [date, setDate] = useState<string>(
        `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(-2)}`
    );

    const { ndk } = useNDK();

    useEffect(() => {
        setDate(`${year}-${("0" + month).slice(-2)}-${("0" + day).slice(-2)}`);
    }, [day, month, year]);
    useEffect(() => {
        console.log("date", date);
    }, [date]);

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
                setMovie(value);
                setMovieCount(movieCount + 1);
            } else {
            }
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

            if (user) {
                const event = await getUserScore(date, user.npub);

                if (event) {
                    const score = JSON.parse(event.content) as Score;
                    setScore(score);
                }
            }
        };

        setMostRecentMovie();
        getUserScore();
    }, [date]);

    return (
        <>
            {movie && movie.date == date && (
                <div className="bg-foreground p-4 flex gap-4 w-[180px]">
                    {!score && (
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex justify-center gap-4">
                                <span className="font-bold text-xl">{day}</span>
                            </div>
                            <div className="h-[111px] w-[81px] bg-secondary flex justify-center items-center border-2 border-accent">
                                <span className="text-center">Poster</span>
                            </div>
                            <Link
                                href={"/movies/" + date}
                                className="btn-secondary text-center w-full"
                            >
                                PLAY
                            </Link>
                        </div>
                    )}
                    {score && (
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex justify-center gap-4">
                                <span className="font-bold text-xl">{day}</span>
                            </div>
                            {score.found ? (
                                <div className="h-[111px] w-[81px] bg-green-200 flex justify-center items-center border-2 border-accent">
                                    <span className="text-center">
                                        {score.found
                                            ? score.score + " pts"
                                            : "0 pts"}
                                    </span>
                                </div>
                            ) : (
                                <div className="h-[111px] w-[81px] bg-red-200 flex justify-center items-center border-2 border-accent">
                                    <span className="text-center">
                                        {score.found
                                            ? score.score + " pts"
                                            : "0 pts"}
                                    </span>
                                </div>
                            )}
                            <div className="flex justify-center gap-4">
                                <span className="font-bold text-xl">
                                    {movie.title}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default MovieCard;
