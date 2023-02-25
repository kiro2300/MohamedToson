import React from 'react';
import Img from '../../assets/Portfolio Update-rafiki.svg'
import './Work.scss'
import proj1 from '../../assets/proj1.jpg'
import proj2 from '../../assets/proj2.jpg'
import proj3 from '../../assets/proj3.jpg'
import proj4 from '../../assets/WhatsApp Image 2023-02-24 at 2.59.03 PM.jpeg'
import proj5 from '../../assets/proj5.jpg'
import proj6 from '../../assets/proj6.jpg'

function Works(){
    return(
        <div className='Works' id='Portfolio'>
            <div className='MyWork'>
                <div data-aos="fade-left">
                    <h2>My</h2>
                    <h2>Works.</h2>
                </div>
                <div className='Icon'>
                    <img src={Img}></img>
                </div>
            </div>
                <picture className='cards'>
                    <a target='_blank' href='https://www.behance.net/gallery/160408145/Toson-Personal-Branding' className='card'>
                        <p>Toson Personal Branding</p>

                        <img loading='lazy' src={proj1} alt='Toson Personal Branding'></img>
                    </a>

                    <a target='_blank' href='https://www.behance.net/gallery/161295605/Cookies-n-Cookies-Brand-Design' className='card'>
                        <p>Cookies n Cookies Brand Design</p>
                            <img loading='lazy' src={proj2} alt='Cookies n Cookies Brand Design'></img>
                    </a>


                    <a target='_blank'  href='https://www.behance.net/gallery/152758953/Young-Engineer-Academy-Branding' className='card'>
                        <p>Young Engineer Academy | Branding</p>

                        <img loading='lazy' src={proj3} alt='Young Engineer Academy | Branding'></img>
                    </a>


                    <a target='_blank' href='https://www.behance.net/gallery/146299449/La-saveur-de-Liege-Brand-Identity' className='card'>
                        <p>La saveur de Liege Brand Identity</p>

                        <img loading='lazy' src={proj4} alt='La saveur de Liege Brand Identity'></img>
                    </a>


                    <a target='_blank' href='https://www.behance.net/gallery/158391567/European-kitchen-Logo-Design' className='card'>
                        <p>European kitchen - Logo Design</p>
                        <img loading='lazy' src={proj5} alt='European kitchen - Logo Design'></img>
                    </a>


                    <a target='_blank' href='https://www.behance.net/gallery/157878269/Logofolio' className='card'>
                         <p>Logofolio</p>
                        <img loading='lazy' src={proj6} alt='Logofolio'></img>
                    </a>
                </picture>
        </div>
    )
}

export default Works;