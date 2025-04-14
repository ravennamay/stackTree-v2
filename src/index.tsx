import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles including Tailwind
import App from './App';

// Find the root element in the HTML where the app will be mounted
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

// Create a React root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 