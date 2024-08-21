"use client"

import { useNDK } from "@/hooks/useNDK";
import { NDKPrivateKeySigner } from "@nostr-dev-kit/ndk";
import { useRouter } from "next/navigation";
import { nip19 } from "nostr-tools";
import { FormEvent, useState } from "react";

const LoginPage = () => {
    const [privateKey, setPrivateKey] = useState<string>("")
    const {ndk, connectedUser} = useNDK();
    const router = useRouter()

    // "nsec1qye4yza0ghl5vlaryhd9nlhkmpa3x8zpcrjq6gjjqgmp0j26z64qhp7hq2"


    async function setSigner(priKey: string) {
        const privateKeySigner = new NDKPrivateKeySigner(priKey)

        ndk.signer = privateKeySigner;

        const user = await ndk.signer.user()

        if(user.npub) {
            localStorage.setItem("npub", user.npub)
            router.push("/")
        }
    }
    return (
        <main className="flex justify-center items-center min-h-screen">
            <label>
                Put in your private key :
                <input type="text" onChange={(e) => {
                    setPrivateKey(e.target.value)
                }} minLength={64}></input>
            </label>
            <button onClick={() => setSigner(privateKey)}>Log in</button>
        </main>
    )
}

export default LoginPage;