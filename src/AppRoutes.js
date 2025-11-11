import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Individual from "./Components/Individual";
import Poempage from "./pages/Poempage";
import Articlepage from "./pages/Articlepage";
import Myspace from "./pages/Myspace";
import SearchResults from "./Components/Searchresult";
import MySpaceForm from "./Components/Myspaceform";
import Myindividual from "./Components/Myindividual";
import Login from "./Components/Login";
import AdminPanel from "./Components/Adminpanel";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/poem" element={<Poempage />} />
         <Route path="/search" element={<SearchResults />} />
         <Route path="/article" element={<Articlepage />} />
          <Route path="/myspaceform" element={<MySpaceForm />} />
        <Route path="/individual/:id" element={<Individual />} />
        <Route path="/myspace" element={<Myspace />} />
        <Route path="/myindividual/:id" element={<Myindividual />} />
         <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </Router>
  );
}
