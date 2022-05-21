
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import Signup from './Login/Signup';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Navber from './Pages/Shared/Navber';

function App() {
  return (
    <div className='px-12'>
     <Navber/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={
            
            <RequireAuth>
              <Blog />
            </RequireAuth>

        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
