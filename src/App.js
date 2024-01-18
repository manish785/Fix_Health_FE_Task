import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
   
  const routes = (
    <Routes>
      <Route path='/' element={<LandingPage />}/>
    </Routes>
  )

  return (
    <div className="App">
      <Router>
        {routes}
      </Router>
    </div>
  );
}

export default App;
