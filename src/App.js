import React from 'react';
import logo from './logo.svg';
import FirstPage from './Component/FirstPage/FirstPage';
// import Pets from './Component/Pets/Pets';
import PetGrid from './Component/PetGrid/PetGrid';
import HowItWorks from './Component/HowItWorks/HowItWorks';
import Services from './Component/Services/Services';
import GeneralPage from './Component/GeneralPage/GeneralPage';
// import MakePurchase from './Component/MakePurchase/MakePurchase';
// import Grid from '@material-ui/core/Grid';
import scrollToComponent from 'react-scroll-to-component';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";


import './App.css';
// import FeedBack from './Component/FeedBack/FeedBack';
import Footer from './Component/Footer/Footer';

class App extends React.Component {

    // this.start = React.createRef();

    constructor() {
        super();
    }

    render() {
        // const scrollStart = () => {
        //     scrollToComponent(this.refs.start, {
        //         align: 'top',
        //         duration: 1000
        //     });
        // }

        return (
            <div className="App"
            // style={{ overflowX: "hidden" }}
            >
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/moyin" />
                        </Route>
                        <Route exact path="/moyin">
                            <GeneralPage />
                        </Route>
                        <Route exact path="/moyin/services">
                            <Services />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
