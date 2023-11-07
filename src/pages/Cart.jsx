import React from 'react'
import Helemt from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import '../styles/cart-page.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/UI/cart/CartItem'
import { cartActions } from '../store/shopping-cart/cartSlice'
import {Link} from 'react-router-dom'
const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  return (
    <Helemt title='Cart'>
      <CommonSection title='Your__Cart' />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {
                cartItems.length === 0 ? (<h5 className='text-center mt-4 '>Your cart is empty</h5>) : (<table className=' table mt-4 table-bordered '>
                  <thead>
                    <tr>
                      <th className='text-center'>Image</th>
                      <th className='text-center'>Product title</th>
                      <th className='text-center'> Price</th>
                      <th className='text-center'>Quantity</th>
                      <th className='text-center'>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>)
              }
              <div>
                <h6>Subtotal: <span className='cart__subtotal'>${totalAmount}</span></h6>
                <p>Taxs and shipping will calculate at checkout</p>
                <div className='cart__page-btn d-flex gap-4'>
                 <Link to='/foods'><button className="addToCart__btn">Continue shopping</button></Link> 
                 <Link to='/checkout'><button className="addToCart__btn">Proceed to checkout</button></Link> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Helemt>
  )
}


const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}x</td>
      <td className="text-center cart__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart