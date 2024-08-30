import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { ContextProvider } from './SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root

root.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
