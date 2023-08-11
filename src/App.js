import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { ChakraProvider } from '@chakra-ui/react';


const App = () => {
  return (
    <>
    
    <ChakraProvider>
      <BrowserRouter>
        <Header/>
        <Dashboard/>
        <Footer/>
      </BrowserRouter>
      
    </ChakraProvider>
    </>
  )
}
export default App;
