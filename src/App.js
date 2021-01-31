import React,{ useState, useEffect } from 'react';
import TrendContainer from '../src/container/TrendContainer'
import NetflixOriginalContainer from '../src/container/NetflixOriginalContainer'
import TopRatedContainer from '../src/container/TopRatedContainer'

function App() {
  return (
    <div className="body">
    <div className="Nav">상단바 영역</div>
    <div>
    <TrendContainer></TrendContainer>
    <NetflixOriginalContainer></NetflixOriginalContainer>
    <TopRatedContainer></TopRatedContainer>
    </div>
    
    </div>
  );
}

export default App;
