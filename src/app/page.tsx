import NDKTest from "@/components/NDKTest/NDKTest";
import { useNDK } from "@/hooks/useNDK";
import Image from "next/image";
import GuessMovie from "@/components/GuessMovie/GuessMovie";

export default function Home() {
    let movie = {
        id: "1",
        title: "Avatar",
        date: "2024-08-21",
        year: 2008,
        duration: "2h 42m",
        genres: "Action, Adventure, Sci-Fi",
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi, Joel David Moore, CCH Pounder, Wes Studi, Laz Alonso",
        countries: "United States",
    };

    return (
        <main className="flex min-h-screen items-start justify-between py-24 container gap-10">
            {/* <NDKTest /> */}

            <GuessMovie movie={movie} />
            <div className="w-[1px] h-[400px] py-5 bg-foreground"></div>

            {/* <Scoreboard /> */}
            <div className="min-w-[300px] w-[300px]"></div>
        </main>
    );
}
