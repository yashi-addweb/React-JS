
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Users from './Components/Users';
import Posts from './Components/Posts';



function App() {
  return (
    <>
   <div>
   <Navbar/>
    <Router>
    
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/posts' element={<Posts/>} />
       
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
