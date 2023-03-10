import React from 'react';
import './App.css';
import {LandingPage, ContentTypePage, LoginPage} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LANDING, CONTENT_TYPE, CONTENT_TYPE_BUILDER} from './constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={CONTENT_TYPE} element={<ContentTypePage />} />
          <Route path={LANDING} element={<LoginPage />} />
          <Route path={CONTENT_TYPE_BUILDER} element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
