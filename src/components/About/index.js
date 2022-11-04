import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3,   faHtml5, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About=()=> {
    const [letterClass, setLetterClass]= useState('text-animate')
    useEffect(()=>{
        return()=> setTimeout(()=>{
          setLetterClass('text-animate-hover')

       }, 3000)
   },[])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                     />
                </h1>
                <p>I'm very ambitious MERN developer looking for a role in 
                    established IT company with the oppertunity to work with 
                    the latest technologies on challange and diverse projects.
                </p>
                <p>I'm quietly confident , naturally curious, and perpetually
                    working on improving my chops one design problem at one time
                </p>
                <p>If i need to define me in one sentence that would be a responsible
                   person,a book reader,photography enthusiast and tech-obsessed!!!
                     </p>

            </div>


            <div className='stage-cube-count'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3}color='#28A4D9' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faNode} color='#68A063' />
                    </div>
                </div>

            </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About