import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Home from './Components/Pages/Home';
import ContactUs from './Components/Pages/ContactUs';
import Details from './Components/Pages/Details';
import Users from './Components/Pages/Users';

function App() {
  return (
    <div className="App">
      <Navigation/>
  <Routes>
  <Route exact path='/' element={ <Home />} />
  <Route path='/users' element={ <Users />} />
  <Route path='contact_us' element={ <ContactUs />} />
  <Route path='/details/:id' element={ <Details /> }/>
  </Routes>
    </div>
  );
}

export default App;
