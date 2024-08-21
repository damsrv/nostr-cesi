import {movies} from '../../data/fakeData'
import {users} from '../../data/fakeData'
import {scores} from '../../data/fakeData'

// TODO
export const getMovies = () => {
    return movies;
}

// TODO
export const getMovieById = (id: string) => {
    return movies.find(movie => movie.id === id);
}

// TODO
export const getUsers = () => {

    return users;

}

// TODO
export const getUsersById = (id: string) => {

    return users.find(user => user.id === id);

}


// TODO
export const getScores = (userId: string) => {

    return scores;

}

// TODO
export const getScoreByUserId = (userId: string) => {

    return scores.find(score => score.user.id === userId);

}

// TODO
export const addScore = (userId: string, score: string) => {
    // Kind 1
    // 
    return null;
}
