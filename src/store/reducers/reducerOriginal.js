import { FETCH_NETPLIX_ORIGINALS } from '../actions/index'

export default function(state = [], action){
  switch (action.type){
    case FETCH_NETPLIX_ORIGINALS :
      return { 
        ...state,
        movies: action.data
      }
    default:
      return state
  }
}