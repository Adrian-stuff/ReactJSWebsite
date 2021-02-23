import React from 'react';
import { Link } from 'react-router-dom';
import SoundboardApp from "../projects/SoundBoardApp/soundboardthumbnail.png";
import ValentinesProject from "../projects/ValentinesProject/Valentine.png";
const Projects = () => {
    
    return (
        <>
            <section id="projects" className="sect-proj-pt4"> 
                <div className="container">
                    <div className="row">                      
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                            <h3 className="title-a">Projects</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-md-4">
                            <div className="work-box">
                
                                <Link className="decor" to="/projects/SoundboardApp">
                                    <div>
                                        <div className="work-img">
                                            <img src={SoundboardApp} alt=" " className="img-fluid" />
                                        </div>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">SoundboardApp</h2>
                                                    <div className="w-more">
                                                        <span className="w-ctegory">ReactJs</span> / <span className="w-date">8 Feb. 2021</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-box">
                
                                <Link className="decor" to="/projects/ValentinesProject">
                                    <div>
                                        <div className="work-img">
                                            <img src={ValentinesProject} alt=" " className="img-fluid" />
                                        </div>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">ValentinesProject</h2>
                                                    <div className="w-more">
                                                        <span className="w-ctegory">ReactJs</span> / <span className="w-date">12 Feb. 2021</span>
                                                    </div>
                                                </div>
                
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects;
