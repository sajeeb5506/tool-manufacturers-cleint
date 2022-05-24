
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddReview from './Dashboard/AddReview';
import Dashboard from './Dashboard/Dashboard';
import Myorder from './Dashboard/Myorder';
import MyProfile from './Dashboard/MyProfile';
import Login from './Login/Login';
import RequireAuth from './Login/RequireAuth';
import Signup from './Login/Signup';
import NotFound from './Notfound/NotFound';
import Blog from './Pages/Home/Blog';
import Home from './Pages/Home/Home';
import MyProtfolio from './Pages/Home/MyProtfolio';
import Footer from './Pages/Shared/Footer';
import Navber from './Pages/Shared/Navber';
import Purchase from './Purchase/Purchase';

function App() {
  return (
    <div className='px-12'>
     <Navber/>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={ <Blog />} />
        <Route path="portfolio" element={ <MyProtfolio />} />

        <Route path="dashboard" element={  <RequireAuth><Dashboard/></RequireAuth> }>  
        <Route index element={<Myorder />} />
        <Route path="review" element={<AddReview />} />
        <Route path="profile" element={<MyProfile />} />
        
        </Route>


        <Route path="product/:id" element={
            
            <RequireAuth>
              <Purchase />
            </RequireAuth>

        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
