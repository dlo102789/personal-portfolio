import React from 'react'
import './App.css';
import Layout from './components/layout/Layout.js'
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Layout />

      <Routes>
        <Route path='/about'>
          <Layout />
        </Route>
        <Route path='/'>
          <Layout />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
