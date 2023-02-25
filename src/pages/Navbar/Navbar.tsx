import './Navbar.scss';
function Navbar(props:any){
   
    return(
        <div className="Navbar" >
            <ul style={props.style}>
                <li>
                    <a href='#'>HOME</a>
                </li>
                <li>
                    <a href='#About'>ABOUT</a>
                </li>
                <li>
                    <a href='#Portfolio'>PORTFOLIO</a>
                </li>
                <li>
                    <a href='#Contact'>CONTACT</a>
                </li>
                
            </ul>
        </div>
    )
}

export default Navbar;