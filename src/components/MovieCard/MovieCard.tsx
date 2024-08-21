"use client";
import React from "react";
import Link from "next/link";

const MovieCard = ({
    day,
    month,
    year,
}: {
    day: number;
    month: number;
    year: number;
}) => {
    let movie = {
        id: "5",
        title: "Intouchables",
        date: "2024-08-24",
        year: 2011,
        duration: "1h 52m",
        genres: "Biography, Comedy, Drama",
        director: "Olivier Nakache, Éric Toledano",
        cast: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot, Clotilde Mollet, Alba Gaïa Bellugi, Cyril Mendy, Christian Ameri, Grégoire Oestermann, Joséphine de Meaux",
        countries: "France",
    };
    let score = null;

    let date = new Date(year, month - 1, day);
    // format yyyy-mm-dd
    let formattedDate = `${year}-${("0" + month).slice(-2)}-${("0" + day).slice(
        -2
    )}`;

    return (
        <>
            {movie && (
                <div className="bg-foreground p-4 flex gap-4 w-[180px]">
                    {!score && (
                        <div className="flex flex-col items-center gap-4 w-full">
                            <div className="flex justify-center gap-4">
                                <span className="font-bold text-xl">{day}</span>
                            </div>
                            <div className="h-[111px] w-[81px] bg-secondary flex justify-center items-center border-2 border-accent">
                                <span className="text-center">Poster</span>
                            </div>
                            <Link
                                href={"/movies/" + formattedDate}
                                className="btn-secondary text-center w-full"
                            >
                                PLAY
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default MovieCard;
