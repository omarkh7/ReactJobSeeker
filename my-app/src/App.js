
import Home from './Pages/Home';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import Aboutus from './Pages/Aboutus';
import ApplyNow from './Pages/ApplyNow';
import ContactUs from './Pages/ContactUs';
import {Route,Routes} from 'react-router';





function App() {
  return (
    <div >
      <Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/Home" element={<Home/>}/>
<Route path="ApplyNow" element={<ApplyNow/>}/>
<Route path="aboutus" element={<Aboutus/>}/>
<Route path="contactus" element={<ContactUs/>}/>

</Routes>
<Footer/>
</div>
  );
}

export default App;

