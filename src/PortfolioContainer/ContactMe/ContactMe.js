import React, { useState, axios } from 'react'
import { toast } from 'react-toastify'
import imgBack from '../../images/mailz.jpeg'
import load1 from '../../images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import { faUpLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ContactMe.css'
import { useTypewriter } from 'react-simple-typewriter'
import './ContactMe.css'

const ContactMe = (props) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [banner, setBanner] = useState("")
  const [bool, setBool] = useState(false)

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription = ScrollService.currentScreenFadIn.subscribe(fadeInScreenHandler);

  const [typeEffect] = useTypewriter({
    words: ['Get in touch ☄️', 'connect over mail 📧'],
    loop: {},
    typeSpeed: 100,
    delete: 40
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      }

      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)

      }
      else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(true)
      }
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='main-container fade-in' id={props.id || ""}>
      <ScreenHeading
        subHeading={"Let's keep in touch"}
        title={"Contact me"}
      />
      <div className="central-form">
        <div className="col">
          <h2 className='title'>
            {"Let's "}
            {typeEffect}
          </h2> {" "}
          <a href='#'>
            <i className="cib-leetcode" />
          </a>
          <a href='#'>
            <i className='fa fa-google-plus-square' />
          </a>
          <a href='https://www.instagram.com/krishh__sharma/'>
            <i className='fa fa-instagram' />
          </a>
          <a href='https://www.linkedin.com/in/krishnendu-sukumar'>
            <i className='fa fa-linkedin' />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send you email here</h4>
            <img src={imgBack} alt="image not found" />
          </div>

          <form onSubmit={handleSubmit}>
            <p>{banner}</p>

            <label htmlFor="name">Name</label>
            <input type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <label htmlFor="email">Email</label>
            <input type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} />

            <label htmlFor="message">Message</label>
            <textarea value={message}
              onChange={(e) => setMessage(e.target.value)} />

            <div className="send-btn">
              <button type='submit'>
                Send <i className='fa fa-paper-plane' />
                {bool ? (<b className='load'>
                  <img src={load1} alt="image loading..." />
                </b>) : ("")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="up-arrow"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}>
        <FontAwesomeIcon className='up-icon' icon={faUpLong}
        />
      </div>
    </div>
  )
}

export default ContactMe
