import './App.css';
import Header from "./pages/Header";
import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
