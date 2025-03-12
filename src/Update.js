import React, { useState } from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'

function UpdateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [course, setCourse] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate()

    
    

    function handleSubmit(event) {
        event.preventDefault()
        
        axios.put('http://localhost:8081/update/:id', {
            Name: name,
            Email: email,
            Registration_Number: regNumber,
            Course: course,
            Phone_Number: phoneNumber
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Update Student</h2>
                    <div className='mb-2'>
                        <label htmlFor=''>Name</label>
                        <input 
                            type='text' 
                            placeholder='Enter Name'  
                            className='form-control'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Email</label>
                        <input 
                            type='email' 
                            placeholder='Enter email' 
                            className='form-control'
                            value={email}  
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Registration Number</label>
                        <input 
                            type='text' 
                            placeholder='Enter Registration Number' 
                            className='form-control'
                            value={regNumber}  
                            onChange={e => setRegNumber(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Course</label>
                        <input 
                            type='text' 
                            placeholder='Enter Course' 
                            className='form-control'
                            value={course}  
                            onChange={e => setCourse(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Phone Number</label>
                        <input 
                            type='text' 
                            placeholder='Enter phone number' 
                            className='form-control'
                            value={phoneNumber}  
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent