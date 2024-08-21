"use client";
import React from "react";

const AlreadyGuessed = ({
    movie,
    status,
}: {
    movie: Movie;
    status: string;
}) => {
    return (
        <>
            <div className="movie-title text-center mb-4 !text-2xl">
                {movie.title}
            </div>
            <div className="bg-foreground p-4 flex gap-4">
                <div className="flex flex-col gap-4">
                    {" "}
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
                            <div>{movie.year}</div>
                        </div>
                    </div>
                    <div className="flex gap-20">
                        <div>
                            <div className="label">Director</div>
                            <div>{movie.director}</div>
                        </div>
                        <div>
                            <div className="label">Countries</div>
                            <div>{movie.countries}</div>
                        </div>
                    </div>
                    <div>
                        <div className="label">Cast</div>
                        <div>{movie.cast}</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlreadyGuessed;
