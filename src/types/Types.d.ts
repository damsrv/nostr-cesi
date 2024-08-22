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
    score: number,
    found: boolean
};

type User = {
    id: string;
    pubKey: string;
    userFollows?: string[];
};
