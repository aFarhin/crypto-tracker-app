import React, { useEffect } from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import DashboardPage from './pages/Dashboard'
import CoinPage from './pages/Coin'
import ComparePage from './pages/compare'
import WatchlistPage from './pages/watchlist'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


function App() {
var cursor;
var cursorPointer;

useEffect(() => {
  cursor = document.getElementById("cursor");
  cursorPointer = document.getElementById("cursor-pointer");

  document.body.addEventListener("mousemove", function (e) {
    return (
      (cursor.style.left = e.clientX + "px"),
      (cursor.style.top = e.clientY + "px"),
      (cursorPointer.style.left = e.clientX + "px"),
      (cursorPointer.style.top = e.clientY + "px")
    );
  });

  document.body.addEventListener("mousedown", function (e) {
    return (
      (cursor.style.height = "0.5rem"),
      (cursor.style.width = "0.5rem"),
      (cursorPointer.style.height = "3rem"),
      (cursorPointer.style.width = "3rem")
    );
  });

  document.body.addEventListener("mouseup", function (e) {
    return (
      (cursor.style.height = "0.3rem"),
      (cursor.style.width = "0.3rem"),
      (cursorPointer.style.height = "2rem"),
      (cursorPointer.style.width = "2rem")
    );
  });
}, []);


  return (
    <div className='app'>
    <div className="cursor" id="cursor" />
    <div className="cursor-pointer" id="cursor-pointer" />
     <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Coin/:id" element={<CoinPage />} />
           <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App