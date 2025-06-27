import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Error from '../components/Error';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    if(formData.email && formData.password) return true;
    else {
      setError("Please fill all the fields");
      return false;
    }
  }

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validate()) return; 
    if(loading) return
    setLoading(true)

    try {
      const userCred = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/');
    } catch (error) {
      setLoading(false)
      setError(error.message);
    } finally {
      setLoading(false)
    }

  }
  
  return (
    <main className='p-4 flex flex-col justify-center items-center gap-8 bg-gray-100'>
      <h1 className='text-4xl font-bold'>Login</h1>
      {error && <Error e={error} />}
      <form onSubmit={handleSubmit} className='flex flex-col justify-start items-start gap-4 w-full md:w-2/5 m-auto'>
        <input type='email' value={formData.email} name='email' onChange={handleChange} placeholder='Enter you email' className='border-2 border-gray-200 rounded p-2 outline-none text-lg w-full' />
        <input type='password' value={formData.password} name='password' onChange={handleChange} placeholder='Enter your password' className='border-2 border-gray-200 rounded p-2 outline-none text-lg w-full' />

        <p>Don't have an account? Signup <Link to='/signup' className='text-blue-600'>here</Link></p>
        <button type='submit' className='bg-blue-500 hover:bg-transparent text-gray-50 hover:text-blue-500 p-4 rounded border-blue-500 border-2 transition'>{loading ? 'Loading...' : 'Login'}</button>
      </form>
      
    </main>
  )
}

export default Login