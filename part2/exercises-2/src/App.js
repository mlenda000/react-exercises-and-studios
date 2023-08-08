import React from 'react';
import './App.css';
import Profile from './components/Profile';
import Banner from './components/Banner';

function App(){
  return(
    <div className='bg'>
      <Banner />
      <Profile />
    </div>
  );
}

export default App;