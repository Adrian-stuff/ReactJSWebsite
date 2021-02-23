
import Particles from "react-particles-js";
import Navbar from "./Navbar";
import Header from "./Header";
import About from './About';
import Contact from "./Contact";
import Projects from "./Projects";
import Footer from './Footer';
function Home() {
    return ( <>
        
        <Particles params={{
            "fps_limit": 28,
            "particles": {
                "collisions": {
                    "enable": false
                },
                "number": {
                    "value": 200,
                    "density": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 30,
                    "opacity": 1
                },
                "move": {
                    "speed": 1
                },
                "opacity": {
                    "anim": {
                        "enable": true,
                        "opacity_min": 1,
                        "speed": 1,
                        "sync": false
                    },
                    "value": 0.5
                }
            },
            "polygon": {
                "enable": true,
                "scale": 1,
                "type": "inline",
                "move": {
                    "radius": 10
                },
                "url": "/twice-logo.svg",
                "inline": {
                    "arrangement": "equidistant"
                },
                "draw": {
                    "enable": true,
                    "stroke": {
                        "color": "#fff"
                    }
                }
            },
            "retina_detect": false,
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    }
                },
                "modes": {
                    "bubble": {
                        "size": 7,
                        "distance": 40
                    }
                } }}} />
        
        <Navbar/>
        <Header/>
        <About />
        <Projects />
        <Contact />
        <Footer />
        </>
    );
}

export default Home;