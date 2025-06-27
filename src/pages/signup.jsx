import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../components/Error';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleChange =(e) => {
    setError("")
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validate = () => {
    if(formData.email && formData.password && formData.confirmPassword){
      if(formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return false;
      }
      return true;
    } 
    else {
      setError("Please fill all the fields");
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) return; 
    if(loading) return
    setLoading(true);
    try {
      const userCred = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
      navigate("/")
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <main className='p-4 flex flex-col justify-center items-center gap-8 bg-gray-100'>
      <h1 className='text-4xl font-bold'>Signup</h1>
      {error && <Error e={error} />}
      <form onSubmit={handleSubmit} className='flex flex-col justify-start items-start gap-4 w-full md:w-2/5 m-auto'>
        <input type='email' value={formData.email} name='email' onChange={handleChange} placeholder='Enter you email' className='border-2 border-gray-200 rounded p-2 outline-none text-lg w-full' />
        <input type='password' value={formData.password} name='password' onChange={handleChange} placeholder='Enter your password' className='border-2 border-gray-200 rounded p-2 outline-none text-lg w-full' />
        <input type='password' value={formData.confirmPassword} name='confirmPassword' onChange={handleChange} placeholder='Confirm your password' className='border-2 border-gray-200 rounded p-2 outline-none text-lg w-full' />
        <p>Already have an account? Login <Link to='/login' className='text-blue-600'>here</Link></p>
        <button type='submit' className='bg-blue-500 hover:bg-transparent text-gray-50 hover:text-blue-500 p-4 rounded border-blue-500 border-2 transition'>{loading ? 'Loading...' : 'Signup'}</button>
      </form>

      
    </main>
  )
}

export default Signup