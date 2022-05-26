
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UbdateInfo from './Dashboard/UbdateInfo';
import Users from './Dashboard/Users';
import RequireAdmin from './Login/RequireAdmin';
import AdminOrder from './Dashboard/AdminOrder';
import Payment from './Dashboard/Payment';
;

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
        <Route path="payment/:paymentid" element={<Payment/>} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="orders" element={< AdminOrder/>} />
        <Route path="users" element={<Users />} />
        
        </Route>


        <Route path="product/:id" element={
            
            <RequireAuth>
              <Purchase />
            </RequireAuth>

        } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="update" element={<UbdateInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
