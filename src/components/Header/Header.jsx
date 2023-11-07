import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/header.css";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },

];
const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch=useDispatch();
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  const toggleCart=()=>{
    dispatch(cartUiActions.toggle());
  }
  useEffect(() => {
    const handleScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink');
      } else {
        headerRef.current.classList.remove('header__shrink');
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className="header" ref={headerRef}>
      <container>
        <div className="nav__wrapper  d-flex align-items-center justify-content-between">
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu} >
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (

                <NavLink className={(navClass) => navClass.isActive ? "active__menu" : ""} key={index} to={item.path}>{item.display} </NavLink>
              ))}
            </div>
          </div>

          <div className="nav__right d-flex  align-items-center gap-4">
            <span className="cart__icon me-5" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            {/* <span className="user">
              <Link to='login'><i className="ri-user-line"></i></Link>
            </span> */}
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </container>

    </header>
  )
}

export default Header