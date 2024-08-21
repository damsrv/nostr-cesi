type Movie = {
    id: string;
    title: string;
    date: string;
    year: number;
    duration: string;
    genres: string;
    director: string;
    cast: string;
    countries: string;
};

type Score = {
    id: string;
    user: User;
    movie: Movie;
};

type User = {
    id: string;
    pubKey: string;
    userFollows?: string[];
};
