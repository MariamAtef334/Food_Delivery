import React, { useEffect, useState, useRef } from 'react'
import products from '../assets/fake-data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import productImg from '../assets/images/product_01.1.jpg'
import '../styles/product-details.css'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/UI/product-card/ProductCard'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/shopping-cart/cartSlice'
const FoodDetails = () => {
  const [tab, setTab] = useState('desc');
  const { id } = useParams();
  const product = products.find(product => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;
  const relatedProducts = products.filter(item => category === item.category);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      title,
      image01,
      price
    }))
  }


  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product])
  return (
    <Helmet title={'ProductDetails'}>

      <CommonSection title={title}></CommonSection>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 mt-5  ">
              <div className="product__images">
                <div className="image__item mb-3 " onClick={() => {
                  setPreviewImg(product.image01)
                }}>
                  <img src={product.image01} alt='img' className='w-50' />
                </div>
                <div className="image__item mb-3 " onClick={() => {
                  setPreviewImg(product.image02)
                }}>
                  <img src={product.image02} alt='img' className='w-50' />
                </div>
                <div className="image__item" onClick={() =>
                  setPreviewImg(product.image03)
                }>
                  <img src={product.image03} alt='img' className='w-50' />
                </div>
              </div>

            </div>
            <div className="col-lg-4 col-md-4 ">
              <div className="product__main-image">
                <img src={previewImg} alt='img' className='w-100' />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 mt-5">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{category}</span>
                </p>

                <button className="addTOCART__btn" onClick={addToCart}>
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tabs d-flex align-items-center gap-3 py-3">
                <h6 className={`${tab === 'desc' ? 'tab__active' : ''}`} onClick={() => setTab('desc')}>Description </h6>
                <h6 className={`${tab === 'rev' ? 'tab__active' : ''}`} onClick={() => setTab('rev')}>Review</h6>
              </div>

              {tab === 'desc' ? <div className="tab__content"> <p>{desc}</p></div> : <div className="tab__form mb-3">
                <div className="review pt-5 ">
                  <p className="user__name mb-0">
                    Jhon Doe
                  </p>
                  <p className="user__email">
                    jhon1@gmail.com
                  </p>
                  <p className='feedback__text'>Great Product</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">
                    Michael Rohn
                  </p>
                  <p className="user__email">
                    michael4@gmail.com
                  </p>
                  <p className='feedback__text'>Very Good</p>
                </div>
                <div className="review">
                  <p className="user__name mb-0">
                    Yara Hary
                  </p>
                  <p className="user__email">
                    yara2@gmail.com
                  </p>
                  <p className='feedback__text'>Delicious</p>


                </div>
                {/* {isSubmitted && (
                  <div className="review">
                    <p className="user__name mb-0">
                      {inputName}
                    </p>
                    <p className="user__email">
                      {inputEmail}
                    </p>
                    <p className='feedback__text'>{inputMsg}</p>
                  </div>
                )}
                <form className='form ' >
                  <div className="form__group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      onChange={(e) => handleChange(e)}

                      required
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Your Email"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                  </div>
                  <div className="form__group">
                    <textarea
                      rows={5}
                      name="msg"
                      placeholder="Enter Your Message"
                      onChange={(e) => handleChange(e)}

                    />
                  </div>
                  <button className="addTOCART__btn" type="submit" onClick={submitHandler}>Submit</button>
                </form>*/}

              </div>}
            </div> 
            <div className="col-lg-12 mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>

            </div>
            {relatedProducts.map((item) => (<div className="col-lg-3 col-md-4 col-sm-6 mb-4 items">
              {" "}
              <Link to={`/foods/${item.id}`}><ProductCard key={item.id} item={item} /></Link>
            </div>))}
          </div>
        </div>
      </section>
    </Helmet>
  )
}

export default FoodDetails