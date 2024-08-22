"use client";
import React from "react";
import Image from "next/image";
import { Badge } from "lucide-react";

const ScoreboardItem = ({
    score,
    index,
}: {
    score: { user: string; score: number; avatar: string };
    index: number;
}) => {
    return (
        <div className="flex jusity-between items-center gap-5">
            <div className="w-10 h-10 flex justify-center items-center scoreboard-index">
                {index == 0 && (
                    <>
                        <Badge fill="#DAB373" stroke="#DAB373" />{" "}
                        <span className="text-xl font-semibold ">
                            {index + 1}
                        </span>
                    </>
                )}{" "}
                {index == 1 && (
                    <>
                        <Badge fill="#C1C1C1" stroke="#C1C1C1" />{" "}
                        <span className="text-xl font-semibold ">
                            {index + 1}
                        </span>
                    </>
                )}{" "}
                {index == 2 && (
                    <>
                        <Badge fill="#A84A2C" stroke="#A84A2C" />{" "}
                        <span className="text-xl font-semibold ">
                            {index + 1}
                        </span>
                    </>
                )}
                {index > 2 && (
                    <span className="text-xl font-semibold ">{index + 1}</span>
                )}
            </div>
            <div className="flex gap-5 grow">
                <Image
                    src={score.avatar}
                    alt="avatar"
                    className="w-8 h-8"
                    width={40}
                    height={40}
                />
                <div className="grow">{score.user}</div>
            </div>
            <div>
                <span className="text-xl font-semibold">{score.score}</span> pts
            </div>
        </div>
    );
};

export default ScoreboardItem;
