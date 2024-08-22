"use client";

import { useNDK } from "@/hooks/useNDK";
import { NDKPrivateKeySigner } from "@nostr-dev-kit/ndk";
import { useRouter } from "next/navigation";
import { nip19 } from "nostr-tools";
import { FormEvent, useState } from "react";

const LoginPage = () => {
    const [privateKey, setPrivateKey] = useState<string>("");
    const { ndk, connectedUser } = useNDK();
    const router = useRouter();

    // "nsec1qye4yza0ghl5vlaryhd9nlhkmpa3x8zpcrjq6gjjqgmp0j26z64qhp7hq2"

    async function setSigner(priKey: string) {
        const privateKeySigner = new NDKPrivateKeySigner(priKey);

        ndk.signer = privateKeySigner;

        const user = await ndk.signer.user();

        if (user.npub) {
            localStorage.setItem("npub", user.npub);
            router.push("/");
        }
    }
    return (
        <main className=" py-24 min-h-screen">
            <div className="flex justify-center flex-col w-[400px] m-auto">
                <h1 className="text-center mb-10">Login</h1>
                <label className="label mb-2">Enter your private key</label>
                <div className="flex flex-nowrap mb-2">
                    <input
                        type="password"
                        placeholder="Enter your private key"
                        className="border border-accent bg-foreground grow ps-2"
                        onChange={(e) => {
                            setPrivateKey(e.target.value);
                        }}
                        minLength={64}
                    ></input>
                    <button
                        className="btn-primary"
                        onClick={() => setSigner(privateKey)}
                    >
                        Log in
                    </button>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;
