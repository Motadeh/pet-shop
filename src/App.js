import React from 'react';
import logo from './logo.svg';
import FirstPage from './Component/FirstPage/FirstPage';
// import Pets from './Component/Pets/Pets';
import PetGrid from './Component/PetGrid/PetGrid';
import HowItWorks from './Component/HowItWorks/HowItWorks';
// import LocateUs from './Component/LocateUs/LocateUs';
// import MakePurchase from './Component/MakePurchase/MakePurchase';
// import Grid from '@material-ui/core/Grid';
import scrollToComponent from 'react-scroll-to-component';


import './App.css';
// import FeedBack from './Component/FeedBack/FeedBack';
// import Footer from './Component/Footer/Footer';

class App extends React.Component {

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

    scrollWork = () => {
        console.log('clicked')
        // this.start.current.focus()
        scrollToComponent(this.refs.work, {
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
                <FirstPage func={[this.scrollStart, this.scrollWork, this.scrollLocation, this.scrollBuy]} />
                <HowItWorks
                    ref='start'
                />
                <PetGrid />
                {/* <HowItWorks
                    ref='work'
                /> */}
                {/* <LocateUs
                    ref='location'
                /> */}
                {/* <FeedBack /> */}
                {/* <MakePurchase
                    ref='buy'
                /> */}
                {/* <Footer /> */}
                {/* <Header />
            <Header />
            <Header />
            <Header />
            <Header />
            <Header />
            <Header />
            <Header />
            <Header /> */}
            </div>
        );
    }
}

export default App;
