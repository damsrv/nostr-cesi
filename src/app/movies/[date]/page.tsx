"use client"

import { useNDK } from "@/hooks/useNDK"
import { NDKFilter, NDKKind } from "@nostr-dev-kit/ndk"
import { useEffect, useState } from "react"

interface MovieByDatePageProps {
    params: {
        date: string
    }
}
const MovieByDatePage = ({ params }: MovieByDatePageProps) => {
    const [movie, setMovie] = useState<Movie | undefined>(undefined)

    const { ndk } = useNDK();

    useEffect(() => {
        async function getMovieByDate() {
            const filter: NDKFilter = {
                kinds: [NDKKind.Text],
                "#t": [`MOVSTR--MOVIE--${params.date}`],
            };
    
            const movie = await ndk.fetchEvent(filter);

            if(movie) {
                const movieContent = JSON.parse(movie.content) as Movie
                setMovie(movieContent);
            }
        }
        getMovieByDate()
    }, [])
    return (
        <div>{movie ? movie.title : "No movie for today :C"}</div>
    )
}


export default MovieByDatePage;