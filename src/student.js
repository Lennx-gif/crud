import React,{useEffect, useState} from 'react';
import axios from 'axios';
import  {data}  from 'react-router';

function Student() {
  const [Student,setStudent] = useState ([]);
  useEffect(() => {
    axios.get('http://localhost:8081/')
    .then(res => setStudent(res.data))
    .catch(err => console.log(err));
  }, []);
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <button className='btn btn-success'>Add +</button>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
            
          </thead>

          <tbody>
            {
              Student.map ((data,i) => (
                <tr>
                  <td>[data.ID]</td>
                  <td>[data.Name]</td>
                  <td>[data.Email]</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
};

export default Student;