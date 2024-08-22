"use client"

import { useNDK } from "@/hooks/useNDK";
import { NDKEvent } from "@nostr-dev-kit/ndk";

const AddMoviePage = () => {
    const { ndk, connectedUser } = useNDK();

    // Extract where needed
    async function createMovie(movie: Movie) {
        const newEvent = new NDKEvent(ndk)
        newEvent.kind = 1
        newEvent.tags = [["t", `MOVSTR--MOVIE--${movie.date}`]]
        newEvent.content = JSON.stringify(movie)

        await newEvent.publish();
    }

    async function handleClick() {
        await createMovie(
            {
                id: "1",
                title: "Avatar",
                date: "2024-08-22",
                year: 2009,
                duration: "2h 42m",
                genres: "Action, Adventure, Sci-Fi",
                director: "James Cameron",
                cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi, Joel David Moore, CCH Pounder, Wes Studi, Laz Alonso",
                countries: "United States",
            }
        )

        console.log("Movie posted")
    }

    return (
        <button onClick={handleClick}>Ajouter event</button>
    )
}

export default AddMoviePage;