import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import { useForm } from 'react-hook-form'

const success = () => {
  Swal.fire({
    icon:"success",
    title: 'Email Sent Successfully!',
    width: 400,
    padding: '3em',
    color: '#716add',
    // background: '#fff url("	https://sweetalert2.github.io/images/trees.png")',
    backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
          `,
  })
}

const error = () => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href="">Why do I have this issue?</a>',
  })
}

const Contact = () => {
  const { register, handleSubmit, reset,formState: { errors } } = useForm()
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    return () =>
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  }, [])
  const onSubmit = (data, e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_sbfpsmq',
        'template_suaa77b',
        refForm.current,
        '90Y5hoW3pKP10ZLl6'
      )

      .then(
        () => {
          success()
          reset()
        },
        () => {
          error()
        }
      )
  }

  //    const sendEmail=(e) =>{
  //     e.preventDefault();

  //     emailjs
  //     .sendForm(
  //         'service_sbfpsmq',
  //         'template_suaa77b',
  //          refForm.current,
  //         '90Y5hoW3pKP10ZLl6'
  //     )

  //     .then(
  //         ()=>{
  //             success()

  //         },
  //         ()=>{
  //             error()
  //         }
  //     )

  //    }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am intrested in any kind of job oppertunities - according to my
            profile .However,if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={handleSubmit(onSubmit)}>
              <ul>
                <li className='half' >
                  <input
                    {...register('name', {
                      required: true,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                    className={` ${errors.name && 'error'}`}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    className={` ${errors.name && 'error'}`}
                    {...register('email', {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    })}
                    name="email"
                    placeholder="Email"
                  />
                </li>
                <li>
                  <input
                    className={` ${errors.name && 'error'}`}
                    type="text"
                    {...register('subject', { required: true })}
                    name="subject"
                    placeholder="Subject"
                  />
                </li>
                <li>
                  <textarea
                    className={` ${errors.name && 'error'}`}
                    placeholder="Message"
                    {...register('message', { required: true, maxLength: 500 })}
                    name="message"
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Uday,
          <br />
          India
          <br />
          Punghru,Sundernagar <br />
          Mandi,Himachal Pradesh
          <br />
          <span>bhanusharm122@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[31.5164555, 76.870083]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[31.5164555, 76.870083]}>
              <Popup>Uday lives here,come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
