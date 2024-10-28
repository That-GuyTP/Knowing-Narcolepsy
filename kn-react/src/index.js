import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './css/index.css';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import AboutMe from './pages/AboutMe';
import Information from './pages/Information';
import Treatment from './pages/Treatment';
import Support from './pages/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  //useConditionalClass();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(<Layout />)} >
          <Route index element={(<MainPage />)} />
          <Route path="AboutMe" element={(<AboutMe />)} />
          <Route path="Information" element={(<Information />)} />
          <Route path="Treatment" element={(<Treatment />)} />
          <Route path="Support" element={(<Support />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
    <App />
);

/*
const useConditionalClass = () => {
  const location = useLocation();
  const rootElement = document.getElementById('root');

  // Apply "long" class if not Layout or MainPage
  if (location.pathname !== '/') {
    rootElement.classList.add('long');
  } else {
    rootElement.classList.remove('long');
  }
};
*/