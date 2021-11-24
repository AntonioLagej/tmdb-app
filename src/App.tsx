import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import {GlobalStyle} from './GlobalStyle'
import{BrowserRouter,Routes,Route} from 'react-router-dom' 
import Movie from './components/Movie';
import  NotFound from './components/NotFound';

const App :React.FC=()=>{
  return (
    
    <BrowserRouter>
        <GlobalStyle/>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:movieId' element={<Movie/>}/>
    <Route path='/*' element={<NotFound/>}/>
  
  </Routes>
 
    </BrowserRouter>
  );
}

export default App;
