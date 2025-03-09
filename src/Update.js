import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
//import { useNavigate } from 'react-router'

function UpdateStudent() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const {id} = useParams()
    //const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:8081/update'+id, {name,email})
  //      .then(res => {
  //          console.log(res);
   //         navigate('/');
     //   }).catch(err=> console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Update Student</h2>
                <div className='mb-2'>
                    <label htmlFor=''>ID</label>
                    <input type='number' placeholder='Enter ID' className='form-control'/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name'  className='form-control'
                    onChange={e => setName(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter email' className='form-control'  
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Registration_Number</label>
                    <input type='text' placeholder='Enter Registration Number' className='form-control'  
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Course</label>
                    <input type='text' placeholder='Enter Course' className='form-control'  
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Phone_Number</label>
                    <input type='number' placeholder='Enter phone number' className='form-control'  
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateStudent