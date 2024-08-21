"use client";
import NDKTest from "@/components/NDKTest/NDKTest";
import { useNDK } from "@/hooks/useNDK";
import Image from "next/image";
import GuessMovie from "@/components/GuessMovie/GuessMovie";
import ScoreboardMini from "@/components/ScoreboardMini/ScoreboardMini";
import { useEffect, useState } from "react";

export default function Home() {
    let [movie, setMovie] = useState(null as Movie | null);

    useEffect(() => {
        setMovie({
            id: "1",
            title: "Avatar",
            date: "2024-08-21",
            year: 2008,
            duration: "2h 42m",
            genres: "Action, Adventure, Sci-Fi",
            director: "James Cameron",
            cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi, Joel David Moore, CCH Pounder, Wes Studi, Laz Alonso",
            countries: "United States",
        });
    }, [movie]);

    return (
        <main className="flex min-h-screen items-start justify-between py-24 container gap-20">
            {/* <NDKTest /> */}

            {movie && <GuessMovie movie={movie} />}
            <div className="w-[1px] h-[400px] py-5 bg-foreground"></div>

            <ScoreboardMini />
        </main>
    );
}
