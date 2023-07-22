import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <>
    
    <ChakraProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ChakraProvider>
    </>
  )
}
export default App;
