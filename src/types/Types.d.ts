
type Movie = {
    id: string,
    title: string,
    date: string,
    year: number,
    duration: string,
    genres: string,
    director: string,
    countries: string,
    cast: string
} 

type Score = {
    id: string,
    user: User,
    movie: Movie
}

type User = {
    id: string,
    pubKey: string
    userFollows? : string[]
} 



