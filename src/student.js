import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Fixed import

function Student() {
  const [student, setStudent] = useState([]); // Initialize with empty array
  
  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => {
        if (Array.isArray(res.data)) {  // Verify data is an array
          setStudent(res.data);
        } else {
          console.error('Data received is not an array:', res.data);
          setStudent([]);
        }
      })
      .catch(err => {
        console.log(err);
        setStudent([]); // Set empty array on error
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8081/student' + id)
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-100 bg-white rounded p-3'>
        <Link className='btn btn-success' to="/create">Add +</Link>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Registration_Number</th>
              <th>Course</th>
              <th>Phone_Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(student) && student.map((data, i) => (  // Added Array check
              <tr key={i}>
                <td>{data.ID}</td>
                <td>{data.Name}</td>
                <td>{data.Email}</td>
                <td>{data.Registration_Number}</td>
                <td>{data.Course}</td>
                <td>{data.Phone_Number}</td>
                <td>
                  <Link to={`/update/`} className='btn btn-primary '>Update</Link>  {/* Fixed string interpolation */}
                  <button className='btn btn-danger ms-0 ' onClick={() => handleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;