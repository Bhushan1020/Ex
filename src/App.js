import './App.css';
import Home from './component/Home';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Main from './component/Main';
import {BrowserRouter as Route, Routes} from 'react-router-dom';
import Events from './component/Events';
import Footer from './component/Footer';
import Contact from './component/Contact';
import AboutUs from './component/AboutUs';
import FAQ from './component/FAQ';
import Team from './component/Team';
import Admin from './component/Admin';

function App() {
  return (
    <>
    <div className='my'>
    <Home/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/events' element={<Events/>}></Route>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
      <Route path='/faq' element={<FAQ/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    <Footer/>
    </div>
    </>
  );
}

export default App;
