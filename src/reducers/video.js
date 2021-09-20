import { GET_GENRES, GET_VIDEOS, FILTER_VIDEOS_BY_GENRE, FILTER_VIDEOS_BY_MULTIPLE_GENRE, FILTER_VIDEOS_BY_NAME } from "../actions/types";

const initialState = { videos:null, genres:null };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const {type, payload } = action;

    switch (type) {
        case GET_GENRES:
            return {
            ...state,
            genres:payload.genres
            };
        case GET_VIDEOS:
            return {
                ...state,
                videos:payload.videos
            };
        case FILTER_VIDEOS_BY_NAME:
            if(!payload) {
                return {
                    ...state,
                    videosShown:state.videos
                }
            }
            const filterByNameState = state.videos.filter(video => 
                video.title.toString().toLowerCase().includes(payload)
            );
            return {
                ...state,
                videosShown:filterByNameState
            };
        case FILTER_VIDEOS_BY_GENRE:
            if(!payload) {
                return {
                    ...state,
                    videosShown:state.videos
                }
            }
            const filterByGenreState = state.videos.filter(video => video.genre_id === payload);
            return {
                ...state,
                videosShown:filterByGenreState
            };
        case FILTER_VIDEOS_BY_MULTIPLE_GENRE:
            let filteredArr = [];
            if(payload.length === 0) {
                return {
                    ...state,
                    videosShown:state.videos
                }
            }
            payload.map(filter => state.videos.filter(video => 
                { if(video.genre_id === filter)
                    {
                     filteredArr.push(video) 
                    }
                }));
            const filterByMultipleGenreState = filteredArr.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
            return {
                ...state,
                videosShown:filterByMultipleGenreState
            };
        default:
            return state;
    }
}
