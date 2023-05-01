import React from 'react';
import Posts from './components/Posts';
import {  Routes, Route } from 'react-router-dom';
import PostDetails from './components/PostDetails';

function App() {
  return (
    <Routes>
      <Route path='/hacker_news' element={<Posts/>}/>
      <Route path='/post/:id' element={<PostDetails />}/>
    </Routes>
  )
}
export default App;
