import {React} from "react";
import Typed from "react-typed";

const Header = () => {
  
    return (
        <div id="home">
            <div className="header-wrapper">
                <div className="darken-img"></div>

                    <div className="main-info container">
                        <h1 className="title-text ">Hi I'm Adrian </h1>
                        <Typed 
                            className="typed-text"
                            strings={["Once", "Student", "Sana's Husband"]}
                            typeSpeed={40}
                            backSpeed={60}
                            loop
                        />
                    </div>
                      
            </div>
        </div>
    )
}

export default Header;
