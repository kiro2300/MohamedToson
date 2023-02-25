import './Home.scss'
import Img from "../../assets/logo.svg"
function Home(){
    return(
        <div className="Home">
            <div className="logo">
                <img 
                alt='Logo Toson' 
                src={Img}
                data-sizes='auto'
                data-src={Img}
                ></img>
                <link rel="preload" href={Img} as="image"/>
            </div>
            <div className="Name">
                <h1>MOHAMED</h1>
                <h1>TOSON</h1>
                <div className="info">
                    <p>GRAPHIC</p>
                    <p>DESIGNER</p>
                </div>
            </div>

           
        </div>
    )
}

export default Home;