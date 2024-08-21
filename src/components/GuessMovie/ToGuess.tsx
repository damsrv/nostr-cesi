"use client";
import React, { useEffect } from "react";
import FormGuess from "./FormGuess";

const ToGuess = ({
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
    useEffect(() => {}, [movie, step]);

    return (
        <>
            <div className="movie-title text-center mb-4 !text-2xl">
                {movie.title.replace(/\S/g, "_")}
            </div>
            <div className="bg-foreground p-4 flex gap-4 mb-10">
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex gap-20">
                        <div>
                            <div className="label">Genres</div>
                            <div>{movie.genres}</div>
                        </div>
                        <div>
                            <div className="label">Duration</div>
                            <div>{movie.duration}</div>
                        </div>
                        <div>
                            <div className="label">Year</div>
                            <div
                                className={
                                    step == 1 ? "font-bold text-primary" : ""
                                }
                            >
                                {step > 0 ? movie.year : "???"}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div>
                            <div className="label">Director</div>
                            <div
                                className={
                                    step == 2 ? "font-bold text-primary" : ""
                                }
                            >
                                {step > 1 ? movie.director : "???"}
                            </div>
                        </div>
                        <div>
                            <div className="label">Countries</div>
                            <div
                                className={
                                    step == 3 ? "font-bold text-primary" : ""
                                }
                            >
                                {step > 2 ? movie.countries : "???"}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="label">Cast</div>
                        <div
                            className={
                                step == 4 ? "font-bold text-primary" : ""
                            }
                        >
                            {step > 3 ? movie.cast : "???"}
                        </div>
                    </div>
                </div>
            </div>

            <FormGuess
                step={step}
                movie={movie}
                setStep={setStep}
                setStatus={setStatus}
            />
        </>
    );
};

export default ToGuess;
