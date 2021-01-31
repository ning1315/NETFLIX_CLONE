import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Movie from '../component/Movie'
import { fetchTopRate } from '../store/actions'

const TopRatedContainer = () => {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(fetchTopRate())
  },[])

  const TopRatedData = useSelector(state => state.topRated.movies, []) || [];
  return (
    <div>
      <p className="movieTags">Top Rated</p>
      <div className="movieContainer">
      { TopRatedData.results && TopRatedData.results.map((movie) => (
        <Movie poster={movie.poster_path} key={movie.id}></Movie>
      ))}
      </div>
    </div>
  )
}

export default TopRatedContainer