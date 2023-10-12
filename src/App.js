import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Booking from './components/Booking/Booking';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='booking' element={<Booking/>}></Route>
       
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
