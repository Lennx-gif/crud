import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

function CreateStudent() {

    const [ID,setID] = useState('')
    const [Name,setName] = useState('')
    const [Email,setEmail] = useState('')
    const [Registration_Number,setRegistration_Number] = useState('')
    const [Course,setCourse] = useState('')
    const [Phone_Number,setPhone_Number] = useState('')


  

    function handleSubmit(event) {
        event.preventDefault()
        const navigate = useNavigate;

        axios.post('http://localhost:8081/create/', {Name,Email,Registration_Number,Course,Phone_Number,ID})
        .then(res => {
            console.log(res);
            
            navigate('/');
        }).catch(err=> console.log(err));
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor=''>ID</label>
                    <input type='number' placeholder='Enter ID'  className='form-control'
                    onChange={e => setID(e.target.value)}/>
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
                    <input type='text' placeholder='Enter your Registration Number' className='form-control'  
                    onChange={e => setRegistration_Number(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Course</label>
                    <input type='text' placeholder='Enter Course' className='form-control'  
                    onChange={e => setCourse(e.target.value)}/>
                </div>

                <div className='mb-2'>
                    <label htmlFor=''>Phone_Number</label>
                    <input type='number' placeholder='Enter phone number' className='form-control'  
                    onChange={e => setPhone_Number(e.target.value)}/>
                </div>
                <button className='btn btn-success' >Submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateStudent