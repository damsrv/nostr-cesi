
type Movie = {
    id: string,
    title: string,
    date: Date
    year: number,
    duration: string,
    genres: string,
    director: string
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



