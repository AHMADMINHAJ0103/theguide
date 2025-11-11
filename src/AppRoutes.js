import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Individual from "./Components/Individual";
import Poempage from "./pages/Poempage";
import Articlepage from "./pages/Articlepage";
import Myspace from "./pages/Myspace";
import SearchResults from "./Components/Searchresult";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/poem" element={<Poempage />} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/article" element={<Articlepage />} />
        <Route path="/individual/:id" element={<Individual />} />
        <Route path="/myspace" element={<Myspace />} />

      </Routes>
    </Router>
  );
}
