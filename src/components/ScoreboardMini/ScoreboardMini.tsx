"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import ScoreboardItem from "./ScoreboardItem";
import AddFriendForm from "./AddFriendForm";

type UserScore = {
    user: string;
    score: number;
    avatar: string;
};

const ScoreboardMini = () => {
    let [type, setType] = useState("global");
    let [time, setTime] = useState("week");
    let [scores, setScores] = useState([] as UserScore[]);

    useEffect(() => {}, [type, time, scores]);

    useEffect(() => {
        let scoresData = [
            {
                user: "John",
                score: 100,
                avatar: "https://randomuser.me/api/portraits/men/35.jpg",
            },
            {
                user: "Jane",
                score: 90,
                avatar: "https://randomuser.me/api/portraits/women/8.jpg",
            },
            {
                user: "Alice",
                score: 80,
                avatar: "https://randomuser.me/api/portraits/women/17.jpg",
            },
            {
                user: "Bob",
                score: 70,
                avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            },
        ];
        setScores(scoresData);
    }, []);

    return (
        <div className="min-w-[350px] w-[350px]">
            <h1 className="text-center">Scoreboard</h1>

            <div className=" h-[20px] flex items-center">
                <div className="bg-text h-[1px] grow"></div>
            </div>

            <div className="flex justify-between gap-2 mt-5 mb-5">
                <div className="flex justify-center gap-2 mt-5">
                    <button
                        className={
                            " " +
                            (type === "global"
                                ? "text-primary font-semibold"
                                : "text-muted")
                        }
                        onClick={() => setType("global")}
                    >
                        Global
                    </button>
                    |
                    <button
                        className={
                            " " +
                            (type === "friends"
                                ? "text-primary font-semibold"
                                : "text-muted")
                        }
                        onClick={() => setType("friends")}
                    >
                        Friends
                    </button>
                </div>
                <div className="flex justify-center gap-2 mt-5">
                    <button
                        className={
                            " " +
                            (time === "week"
                                ? "text-primary font-semibold"
                                : "text-muted")
                        }
                        onClick={() => setTime("week")}
                    >
                        Week
                    </button>
                    |
                    <button
                        className={
                            " " +
                            (time === "month"
                                ? "text-primary font-semibold"
                                : "text-muted")
                        }
                        onClick={() => setTime("month")}
                    >
                        Month
                    </button>
                </div>
            </div>

            <div className="mb-10 flex flex-col gap-2">
                {scores.map((score, index) => (
                    <>
                        {index != 0 && (
                            <div className="h-[1px] bg-foreground w-full"></div>
                        )}
                        <ScoreboardItem
                            key={index}
                            score={score}
                            index={index}
                        />
                    </>
                ))}
            </div>

            <AddFriendForm />
        </div>
    );
};

export default ScoreboardMini;
