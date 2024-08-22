"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import ToGuess from "./ToGuess";
import AlreadyGuessed from "./AlreadyGuessed";
import { NDKEvent, NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { useNDK } from "@/hooks/useNDK";

const GuessMovie = ({ movie, scores }: { movie: Movie, scores: Score | undefined }) => {
    let [dayState, setDayState] = useState("today");
    let [status, setStatus] = useState("");
    let [step, setStep] = useState(0);

    const { ndk } = useNDK()

    useEffect(() => {
        // si la date du film est égale à la date du jour alors on peut jouer
        // si la date du film est inférieure à la date du jour alors on peut voir le film
        // si la date du film est supérieure à la date du jour alors on ne peut pas voir le film
        let today = new Date();
        let movieDate = new Date(movie.date);
        if (today.toDateString() === movieDate.toDateString()) {
            setDayState("today");
        } else if (today > movieDate) {
            setDayState("past");
        } else {
            setDayState("future");
        }

        if(!scores) {
            setStatus("toGuess")
        }
    }, [movie]);

    useEffect(() => {
        // on vérifie si le film a déjà été trouvé
        // let scores = JSON.parse(localStorage.getItem("scores") || "[]");
        if (scores) {
            if (!scores.found) {
                setStatus("notGuessed");
            } else {
                setStatus("justGuessed");
            }
        }
    }, [scores]);

    useEffect(() => {
        async function sendScore(score: Score) {
            const user = await ndk.signer?.user();
            let userNpub = ""
            if (user) {
                userNpub = user.npub
            }
            const newEvent = new NDKEvent();

            newEvent.kind = 1
            newEvent.content = JSON.stringify(score)

            newEvent.tags = [["t", `MOVSTR--USER-SCORE--${movie.date}--${userNpub}`]]

            await newEvent.publish()
        }

        if (status === "justGuessed" && !scores) {
            // on enregistre le score
            let score = 100 - step * 10;

            sendScore({
                score: score,
                found: true
            })

            console.log("SENT SCORE TO NOSTR", {
                score: score,
                found: true
            })
        }
        if (status === "notGuessed" && !scores) {
            sendScore({
                score: 0,
                found: false
            })
        }
    }, [status]);

    return (
        <div className="grow">
            <div className="mb-10 flex flex-col">
                <h1 className="text-center">
                    Movie of the day -{" "}
                    {new Date(movie.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </h1>

                <div className="flex justify-between items-center flex-nowrap gap-2">
                    {dayState === "today" && (
                        <Link
                            href={"/"}
                            className="text-primary flex items-center flex-nowrap gap-1"
                        >
                            <div>{"<---"} </div>
                            <span>previous</span>
                        </Link>
                    )}
                    <div className="bg-text h-[1px] grow"></div>
                </div>
            </div>

            {status === "notGuessed" && dayState == "today" && (
                <div className="text-center text-red-500 text-xl font-semibold mb-5">
                    You didn&apos;t find the movie, try again tomorrow
                </div>
            )}
            {status === "notGuessed" && dayState == "past" && (
                <div className="text-center text-red-500 text-xl font-semibold mb-5">
                    You didn&apos;t find the movie, you didn&apos;t earn any
                    points
                </div>
            )}
            {status === "justGuessed" && dayState == "today" && (
                <div className="text-center text-green-500 text-xl font-semibold mb-5">
                    Congrats ! You found the movie and you earned{" "}
                    {100 - step * 10} points
                </div>
            )}
            {status === "justGuessed" && dayState == "past" && (
                <div className="text-center text-green-500 text-xl font-semibold mb-5">
                    Congrats ! You found the movie but you didn&apos;t earn any
                    points
                </div>
            )}
            {status === "toGuess" && dayState == "today" && (
                <div className="text-center text-text text-xl font-semibold mb-5">
                    Guess the movie of the day to earn points.
                </div>
            )}
            {status === "toGuess" && dayState == "past" && (
                <div className="text-center text-text text-xl font-semibold mb-5">
                    Guess the movie of this day, you won&apos;t earn points for
                    past days.
                </div>
            )}

            {status === "toGuess" && dayState != "future" && (
                <ToGuess
                    movie={movie}
                    step={step}
                    setStep={setStep}
                    setStatus={setStatus}
                />
            )}
            {status === "alreadyGuessed" ||
                (status === "justGuessed" && (
                    <AlreadyGuessed movie={movie} status={status} />
                ))}

            {dayState === "future" && (
                <div className="text-center text-text text-xl font-semibold mb-5 h-[400px]">
                    You can&apos;t guess the movie of the day before its release
                </div>
            )}
        </div>
    );
};

export default GuessMovie;
