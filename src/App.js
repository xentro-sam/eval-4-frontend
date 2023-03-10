import React from 'react';
import './App.css';
import {LandingPage, ContentTypePage, LoginPage, ErrorPage, NotFoundPage} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {LANDING, CONTENT_TYPE, CONTENT_TYPE_BUILDER, ERROR_ROUTE} from './constants/routes';
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
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
