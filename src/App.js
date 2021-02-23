import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "./components/Error";
import Home from "./components/Home";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
    return ( 
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }></Route>
                <Route path="/" component={ Error }/>

            </Switch>
        </BrowserRouter>
    </>
    );
}

export default App;