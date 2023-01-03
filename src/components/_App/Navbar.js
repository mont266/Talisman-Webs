import React from "react";
import {Link} from 'gatsby';
import * as Icon from 'react-feather';

import Logo from "../../assets/images/logo.png"
import USflag from "../../assets/images/US-Flag.png";


const Navbar = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                            <img src={Logo} alt="logo" />
                        </Link>

                        <button 
                            onClick={toggleNavbar} 
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">

                                <li className="nav-item">
                                    <Link to="/" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/pricing" onClick={toggleNavbar} className="nav-link">
                                        Pricing
                                    </Link> 
                                </li>

                                <li className="nav-item">
                                    <Link to="/portfolio" onClick={toggleNavbar} className="nav-link">
                                        Our Work
                                    </Link>
                                </li>

{/*                                 <li className="nav-item">
                                    <Link to="/blog" onClick={toggleNavbar} className="nav-link">
                                        Blog
                                    </Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link to="/about" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">

                            <Link to="https://talismanwebs.hipporello.net/desk" target="_blank" className="btn btn-light">
							    Support
                            </Link>

                            <Link to="/contact" className="btn btn-primary">
							    Get Started
                            </Link>

                            
						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;