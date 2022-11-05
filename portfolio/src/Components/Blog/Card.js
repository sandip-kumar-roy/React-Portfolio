import React, { useState,useRef } from "react"
import emailjs from '@emailjs/browser';

const Card = (props) => {
  const [modal, setModal] = useState(false)
  const form = useRef();
  const toggleModal = () => {
    setModal(!modal)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8dfp7jq', 'template_f1non74', form.current, '9ut74z8FX937CKv26')
      .then((result) => {
          console.log(result.text);
          alert("EMAIL SEND SUCCESSFULLY");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.date}</span>
          {/*<label>
            <i className='far fa-heart'></i> {props.date}
          </label>*/}
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title_one}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal modal-blog'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              <span>{props.date}</span>
              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>

              {/*---------Leave Message----------  */}
              <div className='contact mtop'>
                <h1>Leave a Reply</h1>

                <form ref={form} onSubmit={sendEmail} className='blog_contact d_flex'>
                  <div className='left'>
                    <input type='text' name="Name" placeholder='Name' />
                    <input type='email' name="Email" placeholder='Email' />
                    <input type='text' name="Website" placeholder='Website' />
                    <button className='btn_shadow'>SUBMIT NOW</button>
                  </div>
                  <div className='right'>
                    <textarea cols='30' rows='12'  name="Comment" placeholder='Comment'></textarea>
                  </div>
                </form>
              </div>
              {/*---------Leave Message----------  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card