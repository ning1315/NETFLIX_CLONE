import React,{ useState, useEffect } from 'react';
import TrendContainer from '../src/container/TrendContainer'
import NetflixOriginalContainer from '../src/container/NetflixOriginalContainer'

function App() {
  return (
    <div className="body">
    <div className="Nav">상단바 영역</div>
    <div>
    <TrendContainer></TrendContainer>
    <NetflixOriginalContainer></NetflixOriginalContainer>
    </div>
    
    </div>
  );
}

export default App;
