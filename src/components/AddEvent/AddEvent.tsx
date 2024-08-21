"use client"

import { useNDK } from "@/hooks/useNDK";
import { NDKEvent } from "@nostr-dev-kit/ndk";
import { nip19 } from "nostr-tools";

const MOVIE_BY_DATE_TAG = 'MOVSTR--MOVIE--';

const AddEvent = ({ date }: { date: string }) => {
  const { ndk, connectedUser } = useNDK();

  // Extract where needed
  async function postScore({ score, found }: { score: number, found: boolean }) {
    const newUserScoreEvent = new NDKEvent(ndk)

    newUserScoreEvent.kind = 1

    if (ndk.signer) {
      const user = await ndk.signer?.user()
      const decoded = nip19.decode(user.npub.toString()).data.toString
      newUserScoreEvent.tags = [["t", `MOVSTR--USER-SCORE--${date}--${decoded}`]]
    }

    const content = { score, found }

    newUserScoreEvent.content = JSON.stringify(content)

    await newUserScoreEvent.publish();
  }

  // Extract where needed
  async function createMovie(movie: Movie) {
    const newEvent = new NDKEvent(ndk)
    newEvent.kind = 1
    newEvent.tags = [["t", `MOVSTR--MOVIE--${movie.date}`]]
    newEvent.content = JSON.stringify(movie)

    await newEvent.publish();
  }

  async function handleClick() {
    //TODO

  }

  return (
    <button onClick={handleClick}>Ajouter event</button>
  )
}

export default AddEvent;