import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNetflixOriginal } from '../store/actions/index'
import Movie from '../component/Movie'

const NetflixOriginalContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNetflixOriginal())
  },[])

  const NetflixOriginalData = useSelector(state => state.netflixOriginals.movies, []) || [];
  console.log(NetflixOriginalData)
  return(
    <div>
      <p className="movieTags">NetflixOriginal</p>
      <div className="movieContainer">
        { NetflixOriginalData.results && NetflixOriginalData.results.map((movie) => (
          <Movie poster={movie.poster_path} key={movie.id}></Movie>
        ))}
      </div>
    </div>
  )
}

export default NetflixOriginalContainer
