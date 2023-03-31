
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='Home' element={<Home></Home>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
