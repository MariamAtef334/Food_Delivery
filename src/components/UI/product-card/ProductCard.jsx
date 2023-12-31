import React from 'react';
import productImg from '../../../assets/images/product_2.1.jpg';
import { Link } from 'react-router-dom';
import '../../../styles/product-card.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
const ProductCard = (props) => {
  const dispatch=useDispatch();
  const addToCart=()=>{
   dispatch(cartActions.addItem({
    id,
    title,
    image01,
    price
   }))
  }
  const {id,title,image01,price}=props.item;
  return (
    <div className='product__item'>
      <div className="product__img">
       <Link  to={`/foods/${id}`}> <img src={image01} alt='product-img' className='w-50' /></Link>
      </div>
      <div className="product__content">
        <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
        <div>
          <span className='product__price p-5 '>${price}</span>
          <button className='addToCart__btn' onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard