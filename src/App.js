import React from 'react';
import './App.css';
import {LandingPage, ContentTypePage} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LANDING, CONTENT_TYPE} from './constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LANDING} element={<LandingPage />} />
          <Route path={CONTENT_TYPE} element={<ContentTypePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
