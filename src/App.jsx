import Header from './components/Header/Header'
import Home from './pages/Home'
import "../src/pages/home.css"
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthContextProvider } from './context/context';
import "../src/assets/global.css"
function App() {
  

  return (
    <>
      <BrowserRouter>
        {/* <AuthContextProvider> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        {/* </AuthContextProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App
