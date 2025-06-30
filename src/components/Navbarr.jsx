import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import Error from './Error';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

const leftRoutes = [
    {
        path: '/',
        label: 'Home'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/cart',
        label: 'Cart'
    },
]

function Navbarr() {
    const [user, loading, error] = useAuthState(auth);
    const rightRoutes = user ? [
        {
            path: '/profile',
            label: 'Profile'
        }
    ] : [
        {
            path: '/login',
            label: 'Login'
        },
    ]
    const navigate = useNavigate()
    if (loading) return <Loading />

    if (error) return <Error />

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login')
    } 
    return (
        <div className='text-lg font-semibold p-4 flex justify-between items-center w-full'>
            <div className='flex gap-4 items-center'>
                {leftRoutes.map((e) => <Link key={e.path} to={e.path} className='hover:text-gray-500 transition'>{e.label}</Link>)}
            </div>
            <div className='flex gap-4 items-center'>
                {rightRoutes.map((e) => <Link key={e.path} to={e.path} className='hover:text-gray-500 transition'>{e.label}</Link>)}
                {user && <button onClick={handleLogout} className='bg-red-500 hover:bg-transparent text-white hover:text-red-500 p-4 rounded border-red-500 border-2 transition cursor-pointer'>Logout</button>}
            </div>
        </div>
    )
}

export default Navbarr