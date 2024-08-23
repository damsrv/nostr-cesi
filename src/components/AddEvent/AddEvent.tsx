"use client";

import { useNDK } from "@/hooks/useNDK";
import { NDKEvent } from "@nostr-dev-kit/ndk";
import { nip19 } from "nostr-tools";

const MOVIE_BY_DATE_TAG = "MOVSTR--MOVIE--";

const AddEvent = ({ date }: { date: string }) => {
    const { ndk, connectedUser } = useNDK();

    // Extract where needed
    async function postScore({
        score,
        found,
    }: {
        score: number;
        found: boolean;
    }) {
        const newUserScoreEvent = new NDKEvent(ndk);

        newUserScoreEvent.kind = 1;

        if (ndk.signer) {
            const user = await ndk.signer?.user();
            newUserScoreEvent.tags = [
                ["t", `MOVSTR--USER-SCORE--${date}--${user.npub}`],
            ];
        }

        const content = { score, found };

        newUserScoreEvent.content = JSON.stringify(content);

        await newUserScoreEvent.publish();
    }

    // Extract where needed
    async function createMovie(movie: Movie) {
        const newEvent = new NDKEvent(ndk);
        newEvent.kind = 1;
        newEvent.tags = [["t", `MOVSTR--MOVIE--${movie.date}`]];
        newEvent.content = JSON.stringify(movie);
        await newEvent.publish();
    }

    async function handleClick() {
        await createMovie({
            id: "5",
            title: "Intouchables",
            date: "2024-08-23",
            year: 2011,
            duration: "1h 52m",
            genres: "Biography, Comedy, Drama",
            director: "Olivier Nakache, Éric Toledano",
            cast: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot, Clotilde Mollet, Alba Gaïa Bellugi, Cyril Mendy, Christian Ameri, Grégoire Oestermann, Joséphine de Meaux",
            countries: "France",
        });
        console.log("New score posted");
    }

    return <button onClick={handleClick}>Ajouter event</button>;
};

export default AddEvent;
