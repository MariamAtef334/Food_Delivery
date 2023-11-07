import { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitHandler = e => {
    e.preventDefault();
    setIsSubmitted(true);

  }
  return (
    <>
      <Helmet title='checkout'>
        <CommonSection title='checkout' />
        <section>
          
              {isSubmitted ? <div className="checkoutMessage">
                <div className="checkoutTitleContainer">
                  <AiFillCheckCircle className="checkoutIcon" />
                  <h3>Thank you for your order!</h3>
                </div>
                <span>
                  Your order is being processed and will be delivered as fast as
                  possible.
                </span>
              </div> : <div className="contianer">
            <div className="row">
              <div className="col-lg-12">
                <form className='form mt-4 bg-white ' >
                  <div className="form__group">
                    <input type='text' placeholder='Enter Your Name' required />
                  </div>
                  <div className="form__group">
                    <input type='text' placeholder='Enter Your Email' required />
                  </div>
                  <div className="form__group">
                    <input type='text' placeholder='Enter Your Address' required />
                  </div>
                  <button className="addTOCART__btn" type="submit" onClick={submitHandler}>Submit</button>
                </form>
              </div>
              </div>
              </div>}
        </section>

      </Helmet>

    </>
  );
};

export default Checkout;
