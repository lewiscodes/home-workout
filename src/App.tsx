import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/home-workout",
    element: <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
