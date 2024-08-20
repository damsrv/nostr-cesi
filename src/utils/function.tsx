import {movies} from '../../data/fakeData'
import {users} from '../../data/fakeData'
import {scores} from '../../data/fakeData'

export const getMovies = () => {

    return movies;

}

export const getMovieById = (id: string) => {

    return movies.find(movie => movie.id === id);

}

export const getUsers = () => {

    return users;

}

export const getUsersById = (id: string) => {

    return users.find(user => user.id === id);

}


export const getScores = (userId: string) => {

    return scores;

}

export const getScoreByUserId = (userId: string) => {

    return scores.find(score => score.user.id === userId);

}

export const addScore = (userId: string, score: string) => {

    return null;

}
