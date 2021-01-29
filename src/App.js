import React,{ useState, useEffect } from 'react';
import TrendContainer from '../src/container/TrendContainer'

function App() {
  return (
    <div className="App">
    <div className="Nav">상단바 영역</div>
    <div>
    <TrendContainer></TrendContainer>
    <TrendContainer></TrendContainer>
    <TrendContainer></TrendContainer>
    </div>
    
    </div>
  );
}

export default App;
