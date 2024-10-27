import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"; //Router tools that routes people to different pages as needed.
import './css/index.css';
import Layout from './Layout';
import MainPage from './pages/MainPage';
import AboutMe from './pages/AboutMe';
import Information from './pages/Information';
import Treatment from './pages/Treatment';
import Support from './pages/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
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
