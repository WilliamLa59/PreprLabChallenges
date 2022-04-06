
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Challenges } from './components/Challenges/Challenges';
import { Labs } from './components/Labs/Labs';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path="/" element={<Challenges/>}/> 
          <Route path="/labs" element={<Labs/>}/> 
          <Route path="/projects" element={<Projects/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
