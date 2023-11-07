import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from "../../assets/images/res-logo.png";
import { Link, useNavigate } from "react-router-dom";
import '../../styles/footer.css';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='footer mt-5 '>

        <div className='container'>
          <div className=' row '>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <div className=' list-group '>
                <div className="footer__logo text-start logo list-group-item  border-0" onClick={() => navigate("/home")}>
                  <img src={logo} alt="logo" />
                  <h5 className='footer__title'>Tasty Treat</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a optio corrupti.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <h5 className='footer__title '>Dlivery Time</h5>
              <div className=' list-group '>
                <div className=' list-group-item delivery__time-item border-0 ps-0'>
                  <span>Sunday - Thursday</span>
                  <p>10:00am : 11:00pm</p>
                </div>
              </div>
              <div className=' list-group-item delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off Day</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <h5 className='footer__title '>Contact</h5>
              <div className=' list-group '>
                <div className=' list-group-item delivery__time-item border-0 ps-0'>
                  <span>Location: ZindaBazar, Sylhet-3100, Bangladesh</span>

                </div>
                <div className=' list-group-item delivery__time-item border-0 ps-0'>
                  <span>Phone: 01228435002</span>

                </div>
                <div className=' list-group-item delivery__time-item border-0 ps-0'>
                  <span>Email: mariamatef334@gmail.com</span>

                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6'>
              <h5 className='footer__title '>Newsletter</h5>
              <p>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type='email' placeholder='Enter Your Email' />
                <span><i className='ri-send-plane-line'></i></span>
              </div>
            </div>
          </div>
          <div className="row mt-5 ">
            <div className="col-lg-6 col-md-6 ">
              <p className='copyright'>Copyright - 2023, All Rights Reserved</p>
            </div>
            <div className="col-lg-6 col-md-6 ">
              <div className="social__linnks d-flex align-items-center gap-4 justify-content-end ">
              <p className='m-0'>Follow: </p>
              <span><Link to='https://www.facebook.com/mariem.atef.7/' className='links'><i className='ri-facebook-line'></i></Link></span>
              <span><Link to='https://github.com/MariamAtef334'  className='links'><i className='ri-github-line'></i></Link></span>
              <span><Link to='https://x.com/Mariam908036892?s=09'  className='links'><i className='ri-twitter-line'></i></Link></span>
              <span><Link to='https://www.linkedin.com/in/mariam-atef-1b97311b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'  className='links'><i className='ri-linkedin-line'></i></Link></span>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Footer