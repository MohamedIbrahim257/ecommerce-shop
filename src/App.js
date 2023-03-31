
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductsDetails from './pages/ProductsDetails';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='Home' element={<Home></Home>} ></Route>
        <Route path='ProductsDetails' element={<ProductsDetails></ProductsDetails>} >
          <Route path=':id' ></Route>
        </Route>

      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
