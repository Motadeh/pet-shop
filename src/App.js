import React from 'react';
import logo from './logo.svg';
import FirstPage from './Component/FirstPage/FirstPage';
import AboutUs from './Component/AboutUs/AboutUs';
import Grid from '@material-ui/core/Grid';
import Header from './Component/Header/Header';
import scrollToComponent from 'react-scroll-to-component';


import './App.css';

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

    render() {
        // const scrollStart = () => {
        //     scrollToComponent(this.refs.start, {
        //         align: 'top',
        //         duration: 1000
        //     });
        // }

        return (
            <div className="App">
                <FirstPage func={[this.scrollStart]} />
                <AboutUs
                    // {...props}
                    ref='start'
                />
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
