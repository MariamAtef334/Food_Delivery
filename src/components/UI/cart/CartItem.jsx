import React from 'react'
import productImg from '../../../assets/images/product_01.1.jpg';
import '../../../styles/cart-item.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
const CartItem = ({item}) => {
  const {id,title,price,image01,quantity,totalPrice}=item;
  
  const dispatch=useDispatch();
  const increamentItem=()=>{
    dispatch(cartActions.addItem({
      id,
      title,
      totalPrice,
      image01,

    }));
  }
  const decreamentItem=()=>{
    dispatch(cartActions.removeItem(id));
  }
  const deletetItem=()=>{
    dispatch(cartActions.deleteItem(id));
  }
  return (
    <div className=' list-group-item border-0 cart__item'>
      <div className="cart__item-info d-flex gap-4">
        <img src={image01} alt='img' />
      </div>
      <div className="cart__product-info  w-100 d-flex align-items-center gap-4 justify-content-between">
        <div>
          <h6 className='cart__product-title'>{title}</h6>
          <p className=" d-flex align-items-center gap-5 cart__product-price">{quantity}x<span>${totalPrice}</span></p>
          <div className='increase__decrease-btn d-flex align-items-center gap-3 justify-content-between '>
            <span className='increase__btn' onClick={increamentItem}><i className='ri-add-line'></i></span>
            <span className='quantity'>{quantity}</span>
            <span className='decrease__btn' onClick={decreamentItem}><i className='ri-subtract-line'></i></span>
          </div>
        </div>
        <span className="delete__btn" onClick={deletetItem}>
            <i className="ri-close-line"></i>
          </span>
      </div>
    </div>
  )
}

export default CartItem