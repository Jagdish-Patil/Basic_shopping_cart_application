import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const cartList = useSelector((state)=> state.cart);
  const dispatch = useDispatch()
  const handleRemove = (id) =>{
    dispatch(remove(id))
  }

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
            cartList.map(item => (
              <div className='cartCard'>
                <img src={item.image} alt='' />
                <h5>{item.title}</h5>
                <h5>{item.price}</h5>
                <button onClick={()=> handleRemove(item.id)} className='btn'>Remove</button>
              </div>
            ) )
        }
      </div>
    </div>
  )
}

export default Cart