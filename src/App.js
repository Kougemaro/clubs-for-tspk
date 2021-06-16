import './App.css';
import Home from "./component/pages/Home/Home";
import Club from "./component/pages/Club/Club"
import {BrowserRouter, Route} from "react-router-dom";
import './base'
import 'firebase/app';
import 'firebase/database';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Helmet} from "react-helmet";


function App() {
    return (
        <div className="App">
            <Helmet>
                <title>Клубы по интересам | ТСПК | ЦОПП</title>
            </Helmet>
            <BrowserRouter>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/clubs/:urlTitle">
                    <Club/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;
