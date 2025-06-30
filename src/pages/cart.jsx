import React from 'react'
import Loading from '../components/Loading'
import Error from '../components/Error'

function Cart() {
  const { items, isLoading, error } = useSelector(state => state.cart)
  return (
    <products className='flex flex-col justify-center items-center gap-10'>
      <h2 className='font-bold text-4xl'>Products</h2>
      {isLoading && <Loading />}
      {error && <Error e={error} />}
      <div className='grid grid-cols-4 gap-8'>
        {items?.map((product) => (
          <>{product.toString()}</>
        ))}
      </div>
    </products>
  )
}

export default Cart