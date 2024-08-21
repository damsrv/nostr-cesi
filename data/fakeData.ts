export const movies: Movie[] = [
    {
        id: "1",
        title: "Avatar",
        date: "2024-08-20",
        year: 2009,
        duration: "2h 42m",
        genres: "Action, Adventure, Sci-Fi",
        director: "James Cameron",
        cast: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang, Michelle Rodriguez, Giovanni Ribisi, Joel David Moore, CCH Pounder, Wes Studi, Laz Alonso",
        countries: "United States",
    },
    {
        id: "2",
        title: "Interstellar",
        date: "2024-08-21",
        year: 2014,
        duration: "2h 49m",
        genres: "Adventure, Drama, Sci-Fi",
        director: "Christopher Nolan",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine, Matt Damon, Casey Affleck, Wes Bentley, Topher Grace, Mackenzie Foy, Timothée Chalamet",
        countries: "United States, United Kingdom",
    },
    {
        id: "3",
        title: "Gladiator",
        date: "2024-08-22",
        year: 2000,
        duration: "2h 35m",
        genres: "Action, Adventure, Drama",
        director: "Ridley Scott",
        cast: "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed, Derek Jacobi, Djimon Hounsou, Richard Harris, Ralf Moeller, Tommy Flanagan, Spencer Treat Clark",
        countries: "United States, United Kingdom",
    },
    {
        id: "4",
        title: "Avengers: Endgame",
        date: "2024-08-23",
        year: 2019,
        duration: "3h 1m",
        genres: "Action, Adventure, Drama",
        director: "Anthony Russo, Joe Russo",
        cast: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan",
        countries: "United States",
    },
    {
        id: "5",
        title: "Intouchables",
        date: "2024-08-24",
        year: 2011,
        duration: "1h 52m",
        genres: "Biography, Comedy, Drama",
        director: "Olivier Nakache, Éric Toledano",
        cast: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot, Clotilde Mollet, Alba Gaïa Bellugi, Cyril Mendy, Christian Ameri, Grégoire Oestermann, Joséphine de Meaux",
        countries: "France",
    },
];

const users: User[] = [
    {
        id: "user1",
        pubKey: "ABC123",
        userFollows: ["DEF456"],
    },
    {
        id: "user2",
        pubKey: "DEF456",
        userFollows: ["GHI789"],
    },
    {
        id: "user3",
        pubKey: "GHI789",
        userFollows: ["JKL012"],
    },
    {
        id: "user4",
        pubKey: "JKL012",
        userFollows: ["MNO345"],
    },
    {
        id: "user5",
        pubKey: "MNO345",
        userFollows: ["ABC123"],
    },
];

export const scores: Score[] = [
    {
        id: "score1",
        user: users[0],
        movie: movies[0],
    },
    {
        id: "score2",
        user: users[1],
        movie: movies[1],
    },
    {
        id: "score3",
        user: users[2],
        movie: movies[2],
    },
    {
        id: "score4",
        user: users[3],
        movie: movies[3],
    },
    {
        id: "score5",
        user: users[4],
        movie: movies[4],
    },
];

export { movies, users, scores };
