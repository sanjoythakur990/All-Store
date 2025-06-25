import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { fetchProducts } from '../store/actions/productsActions'
import { searchForProducts } from '../store/slices/productsSlice'

function Home() {
  const { products, isLoading, error } = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  useEffect(() => {
    dispatch(searchForProducts(query))
  }, [query])

  return (
    <main className='flex flex-col gap-8 bg-gray-50'>
      <header className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-5xl font-bold uppercase'>All Store</h1>
        <input value={query} onChange={(e) => setQuery(e.target.value)} type='search' placeholder='Search for products...' className='border-2 border-gray-200 rounded p-2 outline-none text-lg w-2/5' />
      </header>

      <hr />

      <products className='flex flex-col justify-center items-center gap-10'>
        <h2 className='font-bold text-2xl'>Products</h2>
        {isLoading && <Loading />}
        {error && <Error e={error} />}
        <list className='grid grid-cols-4 gap-8'>
          {products?.map((product) => <Product key={product.id} product={product} />)}
        </list>
      </products>
    </main>
  )
}

export default Home