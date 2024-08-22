"use client"

import { useNDK } from "@/hooks/useNDK";
import { processTags } from "@/utils/utils";
import { NDKEvent, NDKFilter, NDKKind, NostrEvent } from "@nostr-dev-kit/ndk";
import { useEffect, useState } from "react";
import { nip19 } from "nostr-tools"

const NDKTest = () => {
    const [mostRecentEvents, setMostRecentEvents] = useState({});

    // Import subscribeAndHandle that has our global instance of NDK
    const { subscribeAndHandle, ndk, connectedUser } = useNDK();

    useEffect(() => {
        const setMostRecentMovie = async () => {
            async function getMovieByDate(date: string) {
                const filter: NDKFilter = {
                    kinds: [NDKKind.Text],
                    "#t": [`MOVSTR--MOVIE--${date}`],
                };

                return await ndk.fetchEvent(filter);
            }

            const event = await getMovieByDate("2024-08-21")
            if (event) {
                setMostRecentEvents(event.rawEvent())
            }

            // if(user) {
            //     const decodedKey = nip19.decode(user!.npub)
            //     console.log(decodedKey)
            //     filter.authors = [decodedKey.data.toString()]
            // }

        }

        const getUserScore = async () => {
            async function getUserScore(date: string, userNpub: string) {
                const filter: NDKFilter = {
                    kinds: [NDKKind.Text],
                    "#t": [`MOVSTR--USER-SCORE--${date}--${userNpub}`],
                };

                return await ndk.fetchEvent(filter);
            }

            const event = await getUserScore("2024-08-21", "npub1p6mpew0lva0afu979c20vwfe78nyc9yr2385s5nueu7xyw3shjpsgm23at")

            if (event) {
                setMostRecentEvents(event.rawEvent())
            }

            // if(user) {
            //     const decodedKey = nip19.decode(user!.npub)
            //     console.log(decodedKey)
            //     filter.authors = [decodedKey.data.toString()]
            // }

        }
        getUserScore()
        // setMostRecentMovie()
    }, []);


    return (
        <pre className="max-w-xl">
            <code>{JSON.stringify(mostRecentEvents, null, 2)}</code>
        </pre>
    )
}

export default NDKTest;