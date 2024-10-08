"use client"

import { useNDK } from "@/hooks/useNDK";
import { processTags } from "@/utils/utils";
import { NDKEvent, NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";
import { useEffect, useState } from "react";

const NDKTest2 = () => {
    const [mostRecentEvent, setMostRecentEvent] = useState({});

    // Import subscribeAndHandle that has our global instance of NDK
    const { subscribeAndHandle } = useNDK();


    useEffect(() => {
        // Filter for kind 1 (Text) events
        // CHALLENGE: Filter for only kind 1 posted by a specific npub
        const filter: NDKFilter = {
            kinds: [NDKKind.Text],
            // "#": ["root"],
            limit: 20
        };

        const handler = (event: NDKEvent) => {
            setMostRecentEvent(event.rawEvent()); // event.rawEvent() returns json without all the NDK methods
        };

        // subscribe to kind 1 events and when they are received, set the most
        // recent event. The closeOnEose option will close the subscription when the relay sends an eose event
        subscribeAndHandle(filter, handler, { closeOnEose: false });
    }, []);


    return (
        <pre className="max-w-xl">
            <code>{JSON.stringify(mostRecentEvent, null, 2)}</code>
        </pre>
    )
}

export default NDKTest2;