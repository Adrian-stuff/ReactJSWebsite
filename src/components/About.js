import {React} from 'react';
import Aboutme from './ABOUTME';
import Progress from "./Progress";
import idpic from "../img/doge.png";
const About = () => {
    return (
    <>
        <section id="about" className=" sect-pt4" >
            
                <div className="container">
                    <div className="about-mf">
                        <div className="box-shadow-full">
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src={idpic} className="img-fluid rounded b-shadow-a" alt="profile-pic" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-7">
                                            <div className="about-info"> 
                                            <p><span className="title-s">Name: </span> <span>Adrian De Vera</span></p>
                                            <p><span className="title-s">Profile: </span> <span>Student</span></p>
                                            <p><span className="title-s">Email: </span> <span>twoadrian6@gmail.com</span></p>
                                            </div> 
                                        </div>
                                    </div>

                                        <div className="skill-mf">
                                            <p className="title-s">Skill</p>
                                            <span>HTML</span> <span className="pull-right">50%</span>
                                            <Progress done="50"/>
                                            <span>CSS3</span> <span className="pull-right">40%</span>
                                            <Progress done="40"/>
                                            <span>JavaScript</span> <span className="pull-right">40%</span>
                                            <Progress done="40"/>
                                            <span>Python</span> <span className="pull-right">60%</span>
                                            <Progress done="60"/>
                                            <span>C#</span> <span className="pull-right">45%</span>
                                            <Progress done="45"/>
                                            <span>Java</span> <span className="pull-right">40%</span>
                                            <Progress done="40"/>
                                        </div>
                                </div>
                                <div className="col-md-6">
                                    <Aboutme />
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
    </>
        
    )
}

export default About;
