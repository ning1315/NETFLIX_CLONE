const axios = require('axios')

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_NETPLIX_ORIGINALS = 'FETCH_NETPLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';

export const fetchTrendData = (data) => {
  return {
    type : FETCH_TRENDING,
    data
  }
}

export const fetchTrending = () => {
  return (dispatch) => {
    return axios.get(``)
  }
}