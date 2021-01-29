import React,{ useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrending } from '../store/actions/index'
import Movie from '../component/Movie';

const TrendContainer = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTrending())
  },[])
  
  const TrendData = useSelector(state => state.trending.movies, []) || [];
  console.log(TrendData)
  return (
    <div>
      <p>Trend Movies</p>
      <div className="movieContainer">
        { TrendData.results && TrendData.results.map((movie) => (
          <Movie poster={movie.poster_path} key={movie.id}></Movie>
        ))}
      </div>
    </div>

  )
}

export default TrendContainer
