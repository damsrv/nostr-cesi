export const movies: Movie[] = [
    {
      id: "1",
      title: "The Lost Empire",
      date: new Date("2023-05-12"),
      year: 2023,
      duration: "2h 15m",
      genres: "Adventure, Fantasy",
      director: "James Cameron"
    },
    {
      id: "2",
      title: "Mystery of the Deep",
      date: new Date("2022-11-08"),
      year: 2022,
      duration: "1h 58m",
      genres: "Thriller, Mystery",
      director: "Christopher Nolan"
    },
    {
      id: "3",
      title: "Silent Voices",
      date: new Date("2021-07-22"),
      year: 2021,
      duration: "1h 45m",
      genres: "Drama",
      director: "Greta Gerwig"
    },
    {
      id: "4",
      title: "Galactic Odyssey",
      date: new Date("2020-09-14"),
      year: 2020,
      duration: "2h 30m",
      genres: "Sci-Fi, Adventure",
      director: "Denis Villeneuve"
    },
    {
      id: "5",
      title: "The Eternal Garden",
      date: new Date("2019-03-27"),
      year: 2019,
      duration: "2h 05m",
      genres: "Fantasy, Romance",
      director: "Peter Jackson"
    }
  ];

  
export const users: User[] = [
    {
      id: "user1",
      pubKey: "ABC123",
      userFollows: ["DEF456"]
    },
    {
      id: "user2",
      pubKey: "DEF456",
      userFollows: ["GHI789"]
    },
    {
      id: "user3",
      pubKey: "GHI789",
      userFollows: ["JKL012"]
    },
    {
      id: "user4",
      pubKey: "JKL012",
      userFollows: ["MNO345"]
    },
    {
      id: "user5",
      pubKey: "MNO345",
      userFollows: ["ABC123"]
    }
  ];


export const scores: Score[] = [
    {
      id: "score1",
      user: users[0],
      movie: movies[0]
    },
    {
      id: "score2",
      user: users[1],
      movie: movies[1]
    },
    {
      id: "score3",
      user: users[2],
      movie: movies[2]
    },
    {
      id: "score4",
      user: users[3],
      movie: movies[3]
    },
    {
      id: "score5",
      user: users[4],
      movie: movies[4]
    }
  ];

  
  