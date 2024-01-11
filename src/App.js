
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Sigin from './Components/Sigin';


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* Display Home first */}
        <Route path='/' element={<Home />}>
        </Route>
        {/* Other routes */}
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signin' element={<Sigin />} />
      </Routes> 
  
    </>
  );
}

export default App;
