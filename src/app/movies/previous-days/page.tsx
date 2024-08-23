"use client";
import React from "react";
import MovieCard from "../../../components/MovieCard/MovieCard";
import { useState, useEffect } from "react";

const PreviousDays = () => {
    let [month, setMonth] = useState(new Date().getMonth() + 1);
    let [numberOfDaysInTheMonth, setNumberOfDaysInTheMonth] = useState(
        new Date(new Date().getFullYear(), month, 0).getDate()
    );
    let [year, setYear] = useState(new Date().getFullYear());
    let [movieCount, setMovieCount] = useState(0);

    useEffect(() => {}, [month, numberOfDaysInTheMonth, year, movieCount]);

    useEffect(() => {
        setMovieCount(0);
        setNumberOfDaysInTheMonth(
            new Date(new Date().getFullYear(), month, 0).getDate()
        );
    }, [month]);

    let goToPreviousMonth = () => {
        if (month === 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };
    let goToNextMonth = () => {
        if (month === 12) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    };

    return (
        <main className="flex flex-col min-h-screen py-24 container">
            <h1 className="text-center">
                {new Date(year, month - 1, 1).toLocaleString("en-GB", {
                    month: "long",
                })}{" "}
                {year}
            </h1>

            <div className=" h-[20px] flex items-center mb-10  gap-2">
                <button
                    className="text-primary flex items-center flex-nowrap gap-1"
                    onClick={goToPreviousMonth}
                >
                    <div>{"<---"} </div>
                    <span>previous month</span>
                </button>
                <div className="bg-text h-[1px] grow"></div>
                <button
                    className="text-primary flex items-center flex-nowrap gap-1"
                    onClick={goToNextMonth}
                >
                    <span>next month</span>
                    <div>{"--->"} </div>
                </button>
            </div>

            {movieCount === 0 && (
                <div className="text-center text-red-500 text-xl font-semibold mb-5">
                    No movies found for this month
                </div>
            )}
            <div className="flex justify-start flex-wrap gap-10 mt-5 mb-5">
                {Array.from(
                    { length: numberOfDaysInTheMonth },
                    (_, i) => i + 1
                ).map((day) => {
                    return (
                        <MovieCard
                            key={day}
                            day={day}
                            month={month}
                            year={year}
                            movieCount={movieCount}
                            setMovieCount={setMovieCount}
                        />
                    );
                })}
            </div>
        </main>
    );
};

export default PreviousDays;
