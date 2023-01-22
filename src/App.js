import './App.css';

import LoadingBar from 'react-top-loading-bar';
import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";


const App = () => { 
  const apiKey = process.env.REACT_APP_NEWS_API;


  const [progress, setProgress] = useState(0)
  const pageSize = 5;

  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <LoadingBar height={3}
          color='#f11946'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general"
            country="in" category="general" pageSize={pageSize} />} />

          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} key="general"
            country="in" category="general" pageSize={pageSize} />} />

          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business"
            country="in" category="business" pageSize={pageSize} />} />

          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment"
            country="in" category="entertainment" pageSize={pageSize} />} />

          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key="health"
            country="in" category="health" pageSize={pageSize} />} />

          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key="science"
            country="in" category="science" pageSize={pageSize} />} />

          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports"
            country="in" category="sports" pageSize={pageSize} />} />

          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology"
            country="in" category="technology" pageSize={pageSize} />} />

        </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;