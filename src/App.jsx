import { lazy, Suspense, useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Navbarr from './components/Navbarr'
import Loading from './components/Loading'
import PrivatteRoute from './components/PrivatteRoute'

const Home = lazyLoad('./pages/Home')
const Cart = lazyLoad('./pages/cart')
const About = lazyLoad('./pages/about')
const Login = lazyLoad('./pages/login')
const Signup = lazyLoad('./pages/signup')
const Wishlist = lazyLoad('./pages/wishlist')
const Profile = lazyLoad('./pages/profile')

function App() {

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Router>
          <Navbarr />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route element={<PrivatteRoute />}>
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </>
  )
}

export default App
