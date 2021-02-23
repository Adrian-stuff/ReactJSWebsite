import {React, useState,useEffect} from "react";
import logo from "../img/doge rose.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import { debounce } from '../utilities/helpers';
const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;

        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {    
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);

    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav className={ visible ? "navbar fixed-top navbar-expand-lg navbar-dark nav-active" : "navbar fixed-top navbar-expand-lg navbar-dark nav-hidden" }>
            <div className="container navbar">
                <BrowserRouter className="navbar-brand">
                    <Link smooth to="#home"><img className="logo" src={logo} alt="Adrian-logo"/></Link>
                </BrowserRouter>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <BrowserRouter>
                                <Link smooth className="nav-link ui-box top-rightToLeft" to="#home">Home <span className="sr-only">(current)</span></Link>
                            </BrowserRouter>
                        </li>
                        <li className="nav-item">
                            <BrowserRouter>
                                <Link smooth className="nav-link ui-box top-rightToLeft" to="#about">About</Link>
                            </BrowserRouter>
                        </li>
                        <li className="nav-item">
                            <BrowserRouter>
                                <Link smooth className="nav-link ui-box top-rightToLeft" to="#projects">Projects</Link>
                            </BrowserRouter>
                        </li><li className="nav-item">
                            <BrowserRouter>
                                <Link smooth className="nav-link ui-box top-rightToLeft" to="#contact">Contact</Link>
                            </BrowserRouter>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
