import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './i18n';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
