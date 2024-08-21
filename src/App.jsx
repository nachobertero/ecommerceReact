import './main.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';

function App() {

  return (
    <>  
     <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/Item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"/productos/:categoria"} element={<ItemListContainer/>} />
          <Route path={"/productos/"} element={<ItemListContainer/>} />
          <Route path={"/nosotros"} element={<Nosotros/>} />
          <Route path={"/contacto"} element={<Contacto/>} />
          <Route path={"/carrito"} element={<Carrito/>} />
          <Route path={"/checkout"} element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
     </CartProvider>
    </>
  );
}

export default App;
