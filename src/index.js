import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import { store, persistor } from './redux/store';
import { theme } from 'utils';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ChakraProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ChakraProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
