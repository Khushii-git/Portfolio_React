import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import K from '../../img/k.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'




function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Heyy! I Am  </span>
                <span>Khushi Khanorkar</span>
                <span>"I am a passionate developer with  
                    a strong foundation in Java and SQL. 
                    Currently exploring web development 
                    with React and building backend expertise
                    using Spring Boot to create full-stack 
                    applications."</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
               <a href="https://github.com/Khushii-git">
                <img src={Github} alt="" />
                </a>
                 <a href='https://www.linkedin.com/in/khushi-khanorkar-39831b266' >
                    <img src={Linkedin} alt="" />
                </a>
                <a href="">
                <img src={Instagram} alt="" />
                </a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" className="vector1" />
            <div className="yellow-cutout-container" style={{'--vector2-url': `url(${Vector2})`}}>
                <img src={Vector2} alt="" className="vector2" />
                <img src={K} alt="" className="girl-image" style={{'--vector2-url': `url(${Vector2})`}} />
            </div>
            <img src={Glassesimoji} alt="" className="glasses-emoji" />
        </div>
        <div style ={{position:'absolute', top:'2rem', left:'97%'}}> 
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{position: 'absolute',   top: '18rem',   left: '50rem', zIndex: 10  }}>
            <FloatingDiv image={Thumbup} txt1='Java' txt2='Enthusiast' />
        </div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:"#C1F5FF", top:'17rem', width:'21rem', height:'11rem', left:'32rem'}}></div>

    </div>
  )
}

export default Intro