import {FILTER_VIDEOS_BY_GENRE, FILTER_VIDEOS_BY_MULTIPLE_GENRE, FILTER_VIDEOS_BY_NAME, GET_GENRES, GET_VIDEOS, SET_MESSAGE} from './types'

export const getGenres = () => (dispatch) => {
    return fetch("https://mockdata-json-server.herokuapp.com/genres")
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_GENRES,
                    payload:{genres:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const getVideos = () => (dispatch) => {
    return fetch("https://mockdata-json-server.herokuapp.com/videos")
          .then(res => res.json())
          .then(
            (result) => {
                dispatch({
                    type: GET_VIDEOS,
                    payload:{videos:result}
                });
                return result;
            },
            (error) => {
                const message =(
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch({
                        type:SET_MESSAGE,
                        payload:message
                    });
                    return Promise.reject();
                }
          )
}

export const filterByName = payload => ({
    type: FILTER_VIDEOS_BY_NAME,
    payload
});

export const filterByGenre = payload => ({
    type: FILTER_VIDEOS_BY_GENRE,
    payload
});

export const filterByMultipleGenre = payload => ({
    type: FILTER_VIDEOS_BY_MULTIPLE_GENRE,
    payload
});