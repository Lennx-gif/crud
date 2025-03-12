import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


function UpdateStudent() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [course, setCourse] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const navigate = useNavigate()
    const { id } = useParams() // Get id from URL params

    // Fetch student data when component mounts
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/student/${id}`)
                if (response.data) {
                    setName(response.data.Name)
                    setEmail(response.data.Email)
                    setRegNumber(response.data.Registration_Number)
                    setCourse(response.data.Course)
                    setPhoneNumber(response.data.Phone_Number)
                }
            } catch (err) {
                console.error('Error fetching student:', err)
                alert('Failed to load student data')
            }
        }
        fetchStudent()
    }, [id])

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            const response = await axios.put(`http://localhost:8081/update/${id}`, {
                Name: name,
                Email: email,
                Registration_Number: regNumber,
                Course: course,
                Phone_Number: phoneNumber
            })
            
            if (response.data) {
                console.log('Update successful:', response.data)
                navigate('/')
            }
        } catch (err) {
            console.error('Error updating student:', err)
            alert('Failed to update student')
        }
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
                    <button type="submit" className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateStudent