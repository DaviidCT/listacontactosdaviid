import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes.jsx'; 
import injectContext from "./store.jsx";

const AppWithContext = injectContext(AppRoutes);

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <AppWithContext />
    </React.StrictMode>
);