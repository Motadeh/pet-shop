import React from 'react';
// import logo from './logo.svg';
import FirstPage from '../FirstPage/FirstPage';
// import Pets from './Component/Pets/Pets';
import PetGrid from '../PetGrid/PetGrid';
import HowItWorks from '../HowItWorks/HowItWorks';
import LocateUs from '../LocateUs/LocateUs';
// import MakePurchase from './Component/MakePurchase/MakePurchase';
// import Grid from '@material-ui/core/Grid';
import scrollToComponent from 'react-scroll-to-component';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";


import './GeneralPage.css';
// import FeedBack from './Component/FeedBack/FeedBack';
import Footer from '../Footer/Footer';

class GeneralPage extends React.Component {

    // this.start = React.createRef();

    constructor() {
        super();
        this.start = React.createRef();
        this.scrollStart = this.scrollStart.bind(this)
    }

    componentDidMount() {
        // this.start.current.focus()
        // this.start.current.focusTextInput();
    }

    scrollStart = () => {
        console.log('clicked')
        // this.start.current.focus()
        scrollToComponent(this.refs.start, {
            align: 'top',
            duration: 1000
        });
    }

    scrollAboutUs = () => {
        console.log('clicked')
        // this.start.current.focus()
        scrollToComponent(this.refs.aboutus, {
            align: 'top',
            duration: 1000
        });
    }

    scrollPet = () => {
        console.log('clicked')
        // this.start.current.focus()
        scrollToComponent(this.refs.pet, {
            align: 'top',
            duration: 1000
        });
    }

    scrollLocation = () => {
        console.log('clicked')
        // this.start.current.focus()
        scrollToComponent(this.refs.location, {
            align: 'top',
            duration: 1000
        });
    }

    scrollBuy = () => {
        console.log('clicked')
        // this.start.current.focus()
        scrollToComponent(this.refs.buy, {
            align: 'top',
            duration: 1000
        });
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
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/"> */}
                            <FirstPage func={[this.scrollStart, this.scrollAboutUs, this.scrollPet, this.scrollLocation, this.scrollBuy]} ref='start' />
                            <HowItWorks
                                ref='aboutus'
                            />
                            <PetGrid
                                ref='pet'
                            />
                            <LocateUs
                                ref='location'
                            />
                            <Footer
                                ref='buy'
                            />
                        {/* </Route>
                    </Switch>
                </BrowserRouter> */}
            </div>
        );
    }
}

export default GeneralPage;
