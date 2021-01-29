import { combineReducers } from 'redux';
import TrendingReducer from './reducerTrending';
import NetflixOriginalsReducer from './reducerOriginal';
import TopRatedReducer from './reducerTopRated';
import ActionMoviesReducer from './reducerActionMovies';
import ComedyMoviesReducer from './reducerComedyMovies';
import HorrorMoviesReducer from './reducerHorrorMovies';
import RomanceMoviesReducer from './reducerRomanceMovies';
import DocumentariesReducer from './reducerDocumentariesMovies'

const rootReducer = combineReducers({
  trending : TrendingReducer,
  netflixOriginals : NetflixOriginalsReducer,
  topRated : TopRatedReducer,
  action : ActionMoviesReducer,
  comedy : ComedyMoviesReducer,
  horror : HorrorMoviesReducer,
  romance : RomanceMoviesReducer,
  documentary : DocumentariesReducer
})

export default rootReducer