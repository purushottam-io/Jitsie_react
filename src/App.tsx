import React from "react";
import styled from "styled-components";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import BlogMainPage from "./pages/blogsMain";
import TeamPage from "./pages/teamPage";

const MainContainer = styled.div`
  border: 1px solid black;
`;

function App() {
  return (
    <MainContainer className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogMainPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MainContainer>
  );
}

export default App;
