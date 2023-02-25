import React from 'react';
import './Skills.scss'
import Img from '../../assets/Designer girl-cuate.svg'
function Skills(){
    return(
        <div className='Skills'>
            <div className='container'>
                <div className='Img'>
                    <img src={Img}></img>
                </div>
                <div className='content'>
                    <div className='title'>
                        <h2 data-aos="fade-up">My</h2>
                        <h2 data-aos="fade-up">Skills.</h2>
                    </div>
                    <div className='cards'>
                        <div className='card' data-aos="fade-down">
                            <p id='number'>01.</p>
                            <p id='title'>BRANDING</p>
                        </div>
                        <div className='card' data-aos="fade-down">
                            <p id='number'>02.</p>
                            <p id='title'>ADVERTISING</p>
                        </div>
                    </div>

                    <div className='triangles'>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                        <div className='triangle'></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}


export default Skills;