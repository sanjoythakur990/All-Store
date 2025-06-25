import React from 'react'
import { Link } from 'react-router-dom'

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
const rightRoutes = [
    {
        path: '/login',
        label: 'Login'
    },
]

function Navbarr() {
    return (
        <div className='text-lg font-semibold p-4 flex justify-between items-center w-full'>
            <left className='flex gap-4'>
                {leftRoutes.map((e) => <Link to={e.path} className='hover:text-gray-500 transition'>{e.label}</Link>)}
            </left>
            <right>
                {rightRoutes.map((e) => <Link to={e.path} className='hover:text-gray-500 transition'>{e.label}</Link>)}
            </right>
        </div>
    )
}

export default Navbarr