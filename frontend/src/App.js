
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Minilent from './Components/Minilent';
import Signup from './Components/Signup';
import Userdashboard from './Components/Userdashboard';
import CarLendorDashboard from './Components/CarLendorDashboard';
import UserUpdate from './Components/Userupdate';
import AdminHome from './Components/Adminhome';
import AdminRegister from './Components/Adminregister';
import AdminLogin from './Components/AdminLogin';
import AdminDashboard from './Components/Admindashboard';




function App() {
  return (
    <>
    <Navbar/>
   
       <Routes>
        <Route path='/' element={<Home />}>
        
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mini-cooper' element={<Minilent/>} />
        <Route path='/user-dashboard' element={<Userdashboard/>}/>
        <Route path='/lendor-dashboard/*' element={<CarLendorDashboard />} />
        <Route path='/user-dashboard/*' element={<Userdashboard/>} />
        <Route path='/update-user/:id' element={<UserUpdate/>} />
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/admin-register' element={<AdminRegister/>}/>  
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route path='/admin-dashboard/*' element={<AdminDashboard/>} />  
        
      </Routes>  
     
   
  
    </>
  );
}

export default App;
