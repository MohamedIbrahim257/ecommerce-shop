import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/ProductContext';
import SidebarProvider from './context/SidebarContext'
import CartContext from './context/CartContext';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartContext>
      <ProductProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </ProductProvider>
    </CartContext>
  </SidebarProvider>



);

