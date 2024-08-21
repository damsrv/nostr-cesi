import { useNDK } from "@/hooks/useNDK";
import { NDKFilter, NDKKind } from "@nostr-dev-kit/ndk";

const { ndk } = useNDK()

export async function getMovieByDate(date: string) {
    const filter: NDKFilter = {
        kinds: [NDKKind.Text],
        "#t": [`MOVSTR--MOVIE--${date}`], 
    };

    return await ndk.fetchEvent(filter);
}