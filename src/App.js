import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
//import 'bootstrap/dist/js/bootstrap'
//import 'bootstrap/js/src/collapse'
//import 'bootstrap/js/src/dropdown'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import student from './student.js';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {student()}></Route>
      </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App