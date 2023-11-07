import { React, useEffect, useState } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import { Link } from 'react-router-dom';
import Category from '../components/UI/category/Category.jsx';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products.js';
import foodCategoryImg01 from '../assets/images/pizza.png';
import foodCategoryImg02 from '../assets/images/hamburger.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../components/UI/product-card/ProductCard.jsx';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider.jsx';
// import CommonSection from '../components/UI/common-section/CommonSection.jsx';
const featureData = [
  {
    title: 'Quick Delivery',
    imgUrl: featureImg01,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit',
    minus: 'doloremque'
  },
  {
    title: 'Super Dine In',
    imgUrl: featureImg02,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit',
    minus: 'doloremque'


  },
  {
    title: 'Easy Pick Up',
    imgUrl: featureImg03,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, odit',
    minus: 'doloremque'


  },
]
const Home = () => {
  const [category, setCategory] = useState('ALL');
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([])
  useEffect(() => {
    const filteredPizza = products.filter(item => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, [])
  useEffect(() => {
    if (category === 'ALL') {
      setAllProducts(products);
    }
    else if (category === 'BURGER') {
      const filteredProducts = products.filter((item) => item.category === 'Burger');
      setAllProducts(filteredProducts)
    }
    else if (category === 'PIZZA') {
      const filteredProducts = products.filter((item) => item.category === 'Pizza');
      setAllProducts(filteredProducts);
    }
    else if (category === 'BREAD') {
      const filteredProducts = products.filter((item) => item.category === 'Bread');
      setAllProducts(filteredProducts);
    }


  }, [category])
  return (
    <Helmet title='Home'>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="hero__content">
                <h5 className='mb-3'>Easy way to make an order</h5>
                <h1 className='hero__title mb-4'><span>Hungry?</span>just wait <br />food at <span>your door</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati perspiciatis quisquam qui voluptatem!</p>
                <div className="hero__btns d-flex align-items-center gap-5 mt-4 ">
                  <button className='order__btn d-flex align-items-center justify-content-between '>Odrder now <i className='ri-arrow-right-s-line'></i></button>
                  <button className='all__foods-btn'><Link to='/foods'>See all foods</Link></button>
                </div>
                <div className=' d-flex align-items-center gap-5 mt-5 hero__service'>
                  <p className=' d-flex align-items-center gap-2 '><span className='shipping__icon'><i className='ri-car-line'></i></span>{' '}No shipping charge</p>
                  <p className=' d-flex align-items-center gap-2 '><span className='shipping__icon'><i className='ri-shield-check-line'></i></span>{' '}100% secure checkout</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">

              <div className="hero__img">
                <img src={heroImg} alt='hero-img' className='w-100' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-0'>
        <Category />
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <h5 className='feature__subtitle mt-5'>What we serve</h5>
              <h2 className='feature__title fw-bold'>Just sit back at home</h2>
              <h2 className='feature__title fw-bold'>We will <span>take care</span></h2>
              <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, nihil?</p>
              <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, labore. {' '}</p>
            </div>
            {

              featureData.map((item, index) => (<div className='col-lg-4 col-md-6 col-sm-6  mt-5' key={index}>
                <div className="feature__item text-center px-5 py-3">
                  <img src={item.imgUrl} alt='img-feature' className='w-25 mb-3' />
                  <h5 className='fw-bold mb-3'>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <h2 className='fw-bold popular__title'>Popular Food</h2>
            </div>
            <div className="col-lg-12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button className={`all-btn ${category === 'ALL' ? 'food__btn-active' : ''}`} onClick={() => setCategory('ALL')}>All</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'food__btn-active' : ''}`} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg01} />Pizza</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'food__btn-active' : ''}`} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg02} />Burger</button>
                <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'food__btn-active' : ''}`} onClick={() => setCategory('BREAD')}><img src={foodCategoryImg03} />Bread</button>
              </div>
            </div>
            {
              allProducts.map((item) => (
                <div className="col-lg-3 col-md-4 col-sm-6  mt-5 items" key={item.id}>
                
                  <Link to={`/foods/${item.id}`}><ProductCard item={item} /></Link> 
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className='why-choose-us'>
        <dic className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <img src={whyImg} alt='img' className='w-100' />
            </div>
            <div className="col-lg-6 col-md-6">

              <div className='why__tasty-treat'>
                <h2 className='tasty__treat-title mb-4 fw-bold'>Why <span>Tasty Treat?</span></h2>
                <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quam tempore optio commodi est! Accusantium aut sunt
                  aliquam minus, eius libero asperiores nam nostrum ullam
                  cum a nemo debitis quia alias.</p>

                <div className=" list-group mt-5 ">
                  <div className=' list-group-item border-0 ps-0 '>
                    <p className='d-flex align-items-center gap-2 choose-us-title'> <i className='ri-checkbox-circle-line'></i>
                      Fresh and tasty Foods</p>
                    <p className='choose-us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet molestias obcaecati dolorem. Esse, unde temporibus.</p>
                  </div>
                  <div className=' list-group-item border-0  ps-0'>
                    <p className='d-flex align-items-center gap-2 choose-us-title'> <i className='ri-checkbox-circle-line'></i>
                      Quality support</p>
                    <p className='choose-us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet molestias obcaecati dolorem. Esse, unde temporibus.</p>
                  </div>
                  <div className=' list-group-item  border-0  ps-0'>
                    <p className='d-flex align-items-center gap-2 choose-us-title'> <i className='ri-checkbox-circle-line'></i>
                      Order from any location</p>
                    <p className='choose-us-desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet molestias obcaecati dolorem. Esse, unde temporibus.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </dic>
      </section>
      <section className='pt-0'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-5 ">
              <h2 className='fw-bold pizza__title'>Hot Pizza</h2>
            </div>
            {
              hotPizza.map((item) => (
                <div className="col-lg-3 col-md-4" key={item.id}>
                  <ProductCard item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-6 mt-5">
              <h5 className='testimonial__subtitle mt-4'>Testimonial</h5>
              <h2 className='testimonial__title fw-bold mt-4'>What our <span>customers </span>saying</h2>
              <p className='testimonial__desc mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maiores id eius provident ducimus veniam nesciunt
                reiciendis odit aliquid officia soluta.</p>
              <TestimonialSlider />
            </div>
            <div className="col-lg-6 col-md-6">
              <img src={networkImg} alt='img' className='w-100' />

            </div>
          </div>
        </div>
      </section>

    </Helmet>
  )
}

export default Home