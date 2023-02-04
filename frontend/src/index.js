import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
import theme from './theme';
import './assets/scss/main.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
