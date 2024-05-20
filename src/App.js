import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import {CarProvider} from './context/CarContext'

function App() {

  return (
    <CarProvider>
    <div className="App">
    <Routes>
     <Route path='/'element={<Home/>}/>
     <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    </div>
    </CarProvider>
  );
}

export default App;
