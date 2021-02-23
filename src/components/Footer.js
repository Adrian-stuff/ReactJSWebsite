import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {HashLink as Link} from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

import React from 'react';
const Footer = () => {
    return (
        <>
            <footer className=" fterr text-center text-white" >
        
            <div className="container pt-4 pb-4">
                
                <a className="btn" href="https://www.facebook.com/iamadrian.devera">
                    <FontAwesomeIcon className="fa-2x" icon={faFacebook} />
                </a>

                <a className="btn" href="https://www.instagram.com/adrian_de.vera/">
                    <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
                </a>

                <a className="btn" href="https://twitter.com/AdrianDeVera18">
                    <FontAwesomeIcon className="fa-2x" icon={faTwitter} />
                </a>

                <a className="btn" href="https://github.com/Adrian-stuff">
                    <FontAwesomeIcon className="fa-2x" icon={faGithub} />
                </a>
                <a className="btn" href="mailto:twoadrian6@gmail.com">
                    <FontAwesomeIcon className="fa-2x" icon={faEnvelope} />
                </a>

                
            </div>
            

            <div className=" fter text-center text-dark p-3">
            <ul className="list-inline " >
                    
                    <li className="list-inline-item">
                        <BrowserRouter>
                            <Link smooth className="item-link" to="#home">Home</Link>
                        </BrowserRouter>
                    </li>
                    <li className="list-inline-item">
                        <BrowserRouter>
                            <Link smooth className="item-link" to="#about">About</Link>
                        </BrowserRouter>
                    </li>
                    <li className="list-inline-item">
                        <BrowserRouter>
                            <Link smooth className="item-link" to="#projects">Projects</Link>
                        </BrowserRouter>
                    </li>
                    <li className="list-inline-item">
                        <BrowserRouter>
                            <Link smooth className="item-link" to="#contact">Contact</Link>
                        </BrowserRouter>
                    </li>

                </ul>
                Made with ❤️ by <strong>Adrian De Vera.</strong>
    
            </div>

            </footer>
        </>
    )
}

export default Footer;
