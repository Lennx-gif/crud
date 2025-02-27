
import "bootstrap/dist/css/bootstrap.min.css"
//import 'bootstrap/dist/js/bootstrap'
//import 'bootstrap/js/src/collapse'
//import 'bootstrap/js/src/dropdown'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Student from './student.js';
import CreateStudent from "./createStudent.js";
import UpdateStudent from "./Update.js";


function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {Student()}></Route>
        <Route path = '/create' element = {CreateStudent()}></Route>
        <Route path = '/update' element = {UpdateStudent()}></Route>
      </Routes>
      </BrowserRouter>
    </div>
   );
}

export default App