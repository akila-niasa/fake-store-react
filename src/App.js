import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Menubar from './components/Menubar/Menubar';
import { useEffect, useState } from 'react';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  const [count,setCount]=useState(0)

  const LoadCount=()=>setCount(count+1)
  
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProducts Loadcount={LoadCount}></AllProducts>
    </div>
  );
}

export default App;
