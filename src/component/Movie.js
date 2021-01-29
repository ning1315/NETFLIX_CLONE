import React,{ useState, useEffect } from 'react';



const Movie = ({ poster }) => {


  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w200/${poster}`}></img>
    </div>
  )
}

export default Movie