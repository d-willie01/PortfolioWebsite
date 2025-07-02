import React from 'react';
import './contact.css';
import {HiOutlineMail} from 'react-icons/hi'
import {FiPhoneCall} from 'react-icons/fi'

//import emailjs from '@emailjs/browser';

const Contact = () => {


  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };
  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>



      <div className='container contact_container'> 

      <div className='container contact_options'>
        <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>dariusw0325@gmail.com</h5>
            <a href='mailto:dariusw0325@gmail.com' target="_blank" rel="noopener noreferrer">Send a message</a>
        </article>



        <article className='contact_option'>
          <FiPhoneCall className='contact_option-icon'/>
            <h4>Call/Text</h4>
            <h5>(520) 440-7433</h5>
            <p>Available for opportunities</p>
        </article>

      </div>


      <form action=''>

          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>




      </form>





      </div>



    </section>
  )
}

export default Contact