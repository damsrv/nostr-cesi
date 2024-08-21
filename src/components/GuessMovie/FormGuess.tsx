"use client";
import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

const FormGuess = ({
    movie,
    step,
    setStep,
    setStatus,
}: {
    movie: Movie;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const [guessList, setGuessList] = useState<string[]>([]);

    const handleSubmit = () => {
        let answer = (document.getElementById("guess") as HTMLInputElement)
            .value;
        let errorContainer = document.getElementById("guess-error")!;

        if (!answer) {
            errorContainer.textContent = "Please enter an answer";
            return;
        }

        if (answer.toLowerCase() === movie.title.toLowerCase()) {
            errorContainer.textContent = "";
            setStatus("justGuessed");
        } else {
            setStep(step + 1);
            setGuessList([...guessList, answer]);
            if (step === 6) {
                setStatus("notGuessed");
                errorContainer.textContent =
                    "You have reached the maximum number of tries!";
            } else {
                errorContainer.textContent = "Wrong answer, try again!";
            }
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-2">
                <label htmlFor="guess" className="label">
                    Enter your answer
                </label>
                <span className="text-red-500"> {7 - step} tries left</span>
            </div>
            <form
                className="flex items-start justify-between gap-5 mb-5"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <div className="grow">
                    <input
                        type="text"
                        id="guess"
                        className="input-movie block mb-4"
                        placeholder={movie.title.replace(/\S/g, "_")}
                    />
                    <div
                        id="guess-error"
                        className="text-center text-red-500 font-semibold"
                    ></div>
                </div>
                <button className="btn-primary" type="submit">
                    Submit
                </button>
            </form>

            <div id="guess-list flex flex-col gap-4" className="mt-5">
                {guessList.map((guess, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <X className="text-red-500" />
                        <span className="font-semibold">
                            {guess.toUpperCase()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormGuess;
