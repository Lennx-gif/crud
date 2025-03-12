import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Student from './student.js';
import CreateStudent from "./createStudent.js";
import UpdateStudent from "./Update.js";

function App() {
  return ( 
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App