import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './ContextProvider/ContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ContextProvider>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
    </ContextProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
