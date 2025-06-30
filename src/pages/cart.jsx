import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems } from '../store/actions/cartActions'
import Product from '../components/Product'

function Cart() {
  const { items, isLoading, error } = useSelector(state => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems())
  }, [])

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h2 className='font-bold text-4xl'>Products</h2>
      {isLoading && <Loading />}
      {error && <Error e={error} />}
      <div className='grid grid-cols-4 gap-8'>
        {items?.map((product) => (
          // <>{product.toString()}</>
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Cart