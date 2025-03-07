import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './components/pages/Portfolio';
import Services from "./components/pages/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "portfolio",
        element: <Portfolio/>
    },
    {
        path: "services",
        element: <Services/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
