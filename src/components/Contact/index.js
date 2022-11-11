import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact=()=> {
        const [letterClass, setLetterClass]= useState('text-animate')
        const refForm= useRef()
        useEffect(()=>{
            return()=> setTimeout(()=>{
              setLetterClass('text-animate-hover')
    
           }, 3000)
       },[])

       const sendEmail=(e) =>{
        e.preventDefault();

        emailjs
        .sendForm(
            'service_sbfpsmq',
            'template_suaa77b',
             refForm.current,
            '90Y5hoW3pKP10ZLl6'
        )

        .then(
            ()=>{
                alert('message successfully sent!')
                window.location.reload(false)
            },
            ()=>{
                alert('failed to send the message! please try again')
            }
        )
        
       }
    
    return(
     <>
     <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t',' ','m','e']}
                idx={15}/>
            </h1>
            <p>
                I am intrested in any kind of job oppertunities - according to my profile
                .However,if you have other request or question,
                don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder='Name' required />

                        </li>
                        <li className='half'>
                            <input type="email"
                             name="email" 
                             placeholder='Email' 
                             required 
                             />
                             </li>
                              <li>
                            <input type="text" 
                            name="subject" 
                            placeholder='Subject' 
                            required 
                            />
                            </li>
                            <li>
                                <textarea 
                                placeholder='Message' 
                                name='message' 
                                required>
                                </textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                    </ul>
                </form>
            </div>
        </div>
        <div className='info-map'>
            Uday,
            <br/>
            India
            <br/>
            Pungh,Sundernagar <br/>
            Mandi,Himachal Pradesh<br/>
            <span>bhanusharm122@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[31.5164555,76.8700830]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker position={[31.5164555,76.8700830]}>
                    <Popup>Uday lives here,come over for a cup of coffee :)</Popup>

                </Marker>

            </MapContainer>

        </div>
     </div>
     <Loader type="pacman"/>
     </>
        
    )
}

export default Contact