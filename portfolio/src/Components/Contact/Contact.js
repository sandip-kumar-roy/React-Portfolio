import React, { useRef } from "react"
import emailjs from '@emailjs/browser';
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dfp7jq', 'template_h8nzip5', form.current, '9ut74z8FX937CKv26')
      .then((result) => {
          console.log(result.text);
          alert("EMAIL SEND SUCCESSFULLY");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Sandip Kumar Roy</h1>
                  <p>Talent Next Trainee @Wipro</p>
                  <p>I am available for freelance work as well as professional industry work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +91 6296343413</p>
                  <p>Email: sandipkumarroy935@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-linkedin-in'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form ref={form} onSubmit={sendEmail}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input placeholder="enter your name" type='text' name='fullname'  onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input placeholder="enter your phone no." type='number' name='phone'  onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input placeholder="enter your email" type='email' name='email'  onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input placeholder="job/work field" type='text' name='subject' onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea placeholder="enter job description" cols='30' rows='10' name='message'  onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact