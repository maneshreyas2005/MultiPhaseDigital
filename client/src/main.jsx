import React from 'react'
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './components/HeroSection.jsx';
import ContactUs from './components/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HeroSection />,
  },
  {
    path: '/ContactUs',
    element: <ContactUs />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
