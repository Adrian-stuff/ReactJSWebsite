import React from 'react';
import doge from "./doge rose.png";
import "./App.css";
const App = () => {
    return (
        <>
            <div>
                <header className="bg-primary text-white">
                    <div className="container text-center">
                        <h1>Hi</h1>
                        <p className="lead">I just want to say...</p>
                    </div>
                </header>

                <section>


                </section>

                <section className="bg-light">
            
                </section>

                <section >
                        <div className="col-lg-8 mx-auto">
                        <p id="lead">I love you</p>
                        <p id="lead">Happy Valentine's Day ❤️ </p>
                        <img src={doge} alt="Doge Rose" className="center"></img>
                        </div>
                </section>

                <footer className="py-5 bg-dark">
                    <div className="container">
                    <p className="m-0 text-center text-white">
                        Happy Valentine's Day.<br />
                        Made with ❤️ by Adrian De Vera.
                        </p>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default App;
