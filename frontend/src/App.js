
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Sigin from './Components/Signup';
import Minilent from './Components/Minilent';
import Signup from './Components/Signup';
import UserDashboard from './Components/Userdashboard';



function App() {
  return (
    <>
    <Navbar/>
    <UserDashboard/>
   
      {/* <Routes>
        
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mini-cooper' element={<Minilent/>} />
      </Routes>  */}
     
   
  
    </>
  );
}

export default App;
