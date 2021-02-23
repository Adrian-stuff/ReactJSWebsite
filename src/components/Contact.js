import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import React from 'react';

const Contact = () => {
    return (
        <>

            <section id="contact" className="sect-mt4">

                <div className="container">
                    <div className="contact-mf">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="title-box-2 pt-4 pt-md-0">
                                        <h5 className="title-left">Contact</h5>
                                    </div>
                                    <div className="description">
                                        <p className="contact-desc">
                                        Walang kabang magawa at gusto mo ng may kausap?
                                        (wag moko i contact ty hehehe)
                                        </p>
                                        <ul className="list-ico">
                                            <li>
                                                <FontAwesomeIcon className="fa-fw" icon={faEnvelope} />
                                                twoadrian6@gmail.com
                                            </li>
                                            <li>
                                                <FontAwesomeIcon className="fa-fw" icon={faLocationArrow} />
                                                Valenzuela City, Metro Manila
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    
                                </div>

                            </div>
                            <div className=" d-flex justify-content-center">
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
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Contact;
