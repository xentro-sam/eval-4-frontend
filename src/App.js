import React from 'react';
import './App.css';
import {LandingPage, ContentTypePage, LoginPage} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LANDING, CONTENT_TYPE, CONTENT_TYPE_BUILDER} from './constants/routes';
import PrivateRoute from './utils/privateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={LANDING} element={<LoginPage />} />
          <Route path={LANDING} element={<PrivateRoute/>}>
            <Route path={CONTENT_TYPE} element={<ContentTypePage />} />
            <Route path={CONTENT_TYPE_BUILDER} element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
