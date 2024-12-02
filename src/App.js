import React from 'react';
import './App.css';
import Forms from './Forms';
import Tables from './Tables';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/add' element={<Forms/>}/>
        <Route path='/' element={<Tables/>}/>
      </Routes>

    </div>
  );
}

export default App;
 