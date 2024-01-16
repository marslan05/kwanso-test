import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./page/home";
import Listing from "./page/listing";
import Profile from "./page/profile";

/**
 * Main application component.
 * @component
 * @return {React.FC} Returns the main application component.
 */
const App: React.FC = () => {
  return (
    <>
      {/* BrowserRouter for handling client-side navigation */}
      <BrowserRouter>
        {/* Routes for defining application routes */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Listing route */}
          <Route path="/listing" element={<Listing />} />

          {/* Profile route with dynamic parameter 'id' */}
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
