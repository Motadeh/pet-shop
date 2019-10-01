import React from 'react';
import logo from './logo.svg';
import FirstPage from './Component/FirstPage/FirstPage';
import AboutUs from './Component/AboutUs/AboutUs';
import Grid from '@material-ui/core/Grid';
import Header from './Component/Header/Header';

import './App.css';

function App() {
    return (
        <div className="App">
            <FirstPage />
            <AboutUs />
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

export default App;
