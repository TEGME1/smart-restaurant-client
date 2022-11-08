import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/landing/landing_page/Landing';
import Menu from './components/menu/menu_page/Menu';
import Details from './components/Details/Details';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import OrderConfirm from './components/order-confirm/OrderConfirm';

function App() {

  const [table, setTable] = useState("")
  const [dinein, setDinein] = useState(true)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="App">
      <ChakraProvider>
        <Routes>
          <Route path="/:table" element={<Landing setTable={setTable} setDinein={setDinein}/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details" element={<Details name={name} setName={setName} phone={phone} setPhone={setPhone} />} />
          <Route path="/order-confirm" element={<OrderConfirm table={table} dinein={dinein} name={name} phone={phone}  />} />
        </Routes>
      </ChakraProvider>
    </div>
  );
}

export default App;
