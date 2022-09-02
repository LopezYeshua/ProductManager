import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div>
      <nav class="d-flex">
        <h1><Link className="unstyle" to="/">ProductManager</Link></h1>
        </nav>
      <Routes>
        <Route element={<Main/>} path="/" />
        <Route element={<Detail/>} path="/:id" />
        <Route element={<Update/>} path="/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
