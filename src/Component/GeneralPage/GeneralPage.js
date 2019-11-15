import React from 'react';
// import logo from './logo.svg';
import FirstPage from '../FirstPage/FirstPage';
import Services from '../Services/Services';
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
import Header from '../Header/Header';

class GeneralPage extends React.Component {

    // this.start = React.createRef();

    constructor() {
        super();
        this.start = React.createRef();
        this.scrollStart = this.scrollStart.bind(this);
        this.state = {
            display: 'none'
        }
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
        console.log('location')
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

    listenScrollEvent = e => {
        if (window.scrollY > 400) {
            console.log('gbese')
            this.setState({ display: 'block' })
        } else {
            this.setState({ color: 'white' })
        }
    }

    componentDidMount() {
        const myId = window.location.hash.slice(1)
        const elem = document.getElementById(myId)
        if (myId === 'home') {
            this.scrollStart()
        }
        else if (myId === 'aboutus') {
            this.scrollAboutUs()
        }
        else if (myId === 'locateus') {
            this.scrollLocation()
        }
        else if (myId === 'contact') {
            this.scrollBuy()
        }

        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {

        return (
            <div className="App"
            // style={{ overflowX: "hidden" }}
            >
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/"> */}
                <div style={{ display: this.state.display }}>
                    <Header />
                </div>
                <FirstPage func={[this.scrollStart, this.scrollAboutUs, this.scrollLocation, this.scrollBuy]} ref='start' />
                <HowItWorks
                    ref='aboutus'
                />
                <PetGrid />
                <LocateUs
                    ref='location'
                />
                <Footer
                    ref='buy'
                />
                <div style={{ display: 'none' }}>
                    <Services />
                </div>
                {/* </Route>
                    </Switch>
                </BrowserRouter> */}
            </div>
        );
    }
}

export default GeneralPage;
