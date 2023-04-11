import './App.css';
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer"
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useMediaQuery } from "react-responsive"; 


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
