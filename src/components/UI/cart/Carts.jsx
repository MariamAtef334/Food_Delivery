import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../../../styles/shopping-cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';

const Carts = () => {
const dispatch=useDispatch();
const toggleCart=()=>{
  dispatch(cartUiActions.toggle())
}
const cartProducts=useSelector(state=>state.cart.cartItems);
const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (

    <div className='cart__container'>
      <div className=" list-group cart">
        <div className="cart__close">
          <span onClick={toggleCart}><i className='ri-close-line'></i></span>
        </div>
        <div className="cart__item-list">
          {
            cartProducts.length === 0 ?<h6 className='text-center mt-5 '>No item added to the cart</h6>: cartProducts.map((item,index)=><CartItem item={item} key={index} />)
          }


        </div>
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>Subtotal amount: <span className=' fw-bold '>${totalAmount}</span></h6>
          <button  className="addTOCart__btn"><Link to='/checkout'>Checkout</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Carts