const axios = require('axios')

export const FETCH_TRENDING = 'FETCH_TRENDING';
export const FETCH_NETPLIX_ORIGINALS = 'FETCH_NETPLIX_ORIGINALS';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';
export const FETCH_HORROR_MOVIES = 'FETCH_HORROR_MOVIES';
export const FETCH_ROMANCE_MOVIES = 'FETCH_ROMANCE_MOVIES';
export const FETCH_DOCUMENTARIES = 'FETCH_DOCUMENTARIES';


const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'f6c50ad2d5427e9942a38f4309510e10'

export const fetchTrendData = (data) => {
  return {
    type : FETCH_TRENDING,
    data
  }
}

export const fetchNetplixOriginalData = (data) => {
  return {
    type : FETCH_NETPLIX_ORIGINALS,
    data
  }
}

export const fetchTopRateData = (data) => {
  return {
    type : FETCH_TOP_RATED,
    data
  }
}

export const fetchActionMoviesData = (data) => {
  return {
    type : FETCH_ACTION_MOVIES,
    data
  }
}

export const fetchComedyMoviesData = (data) => {
  return {
    type : FETCH_COMEDY_MOVIES,
    data
  }
}

export const fetchHorrorMoviesData = (data) => {
  return {
    type : FETCH_HORROR_MOVIES,
    data
  }
}

export const fetchRomanceMoviesData = (data) => {
  return {
    type : FETCH_ROMANCE_MOVIES,
    data
  }
}

export const fetchDocumentariesMoviesData = (data) => {
  return {
    type : FETCH_DOCUMENTARIES,
    data
  }
}

export const fetchTrending = () => {
  return (dispatch) => {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f6c50ad2d5427e9942a38f4309510e10&language=en-US`)
    .then((res) => {
      dispatch(fetchTrendData(res.data))
    })
    .catch((err) => {
      throw(err)
    })
  }
}

export const fetchNetplixOriginal = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`)
    .then((res) => {
      dispatch(fetchNetplixOriginalData(res.data))
    }).catch((err) =>{
      throw(err)
    })
  }
}

export const fetchTopRate = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`)
    .then((res) => {
      dispatch(fetchTopRateData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const fetchActionMovies = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
    .then((res) => {
      dispatch(fetchActionMoviesData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const fetchComedymovies = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
    .then((res) => {
      dispatch(fetchComedyMoviesData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const fetchHorrorMovies = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`)
    .then((res) => {
      dispatch(fetchHorrorMoviesData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const fetchRomanceMovies = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`)
    .then((res) => {
      dispatch(fetchRomanceMoviesData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}

export const fetchDocumentarieMovies = () => {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`)
    .then((res) => {
      dispatch(fetchDocumentariesMoviesData(res.data))
    }).catch((err) => {
      throw(err)
    })
  }
}