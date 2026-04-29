import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='w-full h-full'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div> 
  );
}

export default App;
