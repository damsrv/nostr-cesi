"use client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const AddFriendForm = () => {
    const router = useRouter();
    const [error, setError] = React.useState("");

    const handleSubmit = () => {
        let friendPublicKey = (
            document.querySelector("input") as HTMLInputElement
        ).value;
        console.log(friendPublicKey);

        // add friend logic here
        // let addedFriend = addFriend(myPublicKey, friendPublicKey);
        let addedFriend = false;
        if (addedFriend) {
            // toast ajout réussi
            setError("");
            router.refresh();
        } else {
            // toast ajout échou
            setError("Friend not found");
        }
    };

    return (
        <>
            <form
                className="flex flex-nowrap mb-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <input
                    type="text"
                    placeholder="Enter your friend public key"
                    className="border border-accent bg-foreground grow ps-2"
                />
                <button
                    className="btn-primary"
                    type="submit"
                    title="Add a friend"
                >
                    <Plus />
                </button>
            </form>
            {error && (
                <div className="text-red-500 text-center font-semibold mt-2">
                    {error}
                </div>
            )}
        </>
    );
};

export default AddFriendForm;
