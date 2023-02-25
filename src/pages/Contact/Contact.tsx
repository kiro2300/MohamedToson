import './Contact.scss'
// import Img from '../../assets/patterns.svg'
import Logo from '../../assets/logo.svg'

import Face from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import insta from '../../assets/insta.svg'
import gmail from '../../assets/gmail.svg'
function Contact(){
    return(
        <div className='Contact' id='Contact'>
            <div className='background'>
                {/* <img src={Img} draggable={false}></img> */}
            </div>
            <div className='content'>
                <div className='Links' >
                    <div className='Name' data-aos="fade-up">
                        <h1>MOHAMED TOSON</h1>
                        <p>GRAPHIC DESGINER</p>
                    </div>

                    <div className='contact_links'>
                        <a target="_blank" href='https://www.facebook.com/mohamed.toson.56884' className='links' data-aos="fade-down">
                               <img src={Face} alt='facebook'></img>
                              <p>Mohamed Toson</p>
                        </a>
                        <a target="_blank" href='https://wa.me/201095369580' className='links' data-aos="fade-down">
                               <img src={whatsapp} alt='whatsapp'></img>
                                  <p>01095369580</p>
                        </a>
                        <a target="_blank" href='https://www.instagram.com/mohamedtosonofficial/' className='links' data-aos="fade-down">
                               <img src={insta} alt='instagram'></img>
                              <p>mohamedtosonofficial</p>
                               
                        </a>
                        <a target="_blank" href='mailto:tossonii86@gmail.com' className='links' data-aos="fade-down">
                               <img src={gmail} alt='gmail'></img>
                               <p>tossonii86@gmail.com</p>
                        </a>
                    </div>
                    
                </div>
                <div className='logo'>
                    <img src={Logo} alt='logo'></img>
                </div>
            </div>
        </div>
    )
}

export default Contact;