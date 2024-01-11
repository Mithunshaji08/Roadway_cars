
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Sigin from './Components/Sigin';
import Minilent from './Components/Minilent';


function App() {
  return (
    <>
    <Navbar/>
   
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signin' element={<Sigin />} />
        <Route path='/mini-cooper' element={<Minilent/>} />
      </Routes> 
  
    </>
  );
}

export default App;
