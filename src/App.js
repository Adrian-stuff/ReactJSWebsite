import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SoundBoardApp from "./projects/SoundBoardApp/App";
import ValentinesProject from "./projects/ValentinesProject/App";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
    return ( 
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/projects/SoundBoardApp" exact component={ SoundBoardApp }></Route>
                <Route path="/projects/ValentinesProject" exact component={ ValentinesProject} ></Route>
                <Route path="/" render={ () => <div><h1 style={{textAlign:"center",fontSize:"5rem"}}>404</h1></div>}/>

            </Switch>
        </BrowserRouter>
    </>
    );
}

export default App;