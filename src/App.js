import React from 'react';
//import React Router Dom
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
//import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
//import Components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductProvider from './contexts/ProductContext';
import { SidebarProvider } from './contexts/SidebarContext';
import { CartProvider } from './contexts/CartContext';

const App = () => {
  return <div className='overflow-hidden'>
    
  <ProductProvider>
    <SidebarProvider>
      <CartProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </CartProvider>
    </SidebarProvider>
  </ProductProvider>

    </div>;
};

export default App;
