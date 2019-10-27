import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import './FirstPage.css';
import { Button } from '@material-ui/core';
import { Waypoint } from 'react-waypoint';
// import React, { useState, useEffect } from "react";

const useStyles = (theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: '0px',
        textAlign: 'center',
        // color: theme.palette.text.secondary
    },
}));


// const [values, setValues] = React.useState({
//     headerStyle: 'headertext',
//     mobileIcon: 'ion-navicon-round',
//     showNav: true
// })




export default class FirstPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerStyle: 'headertext',
            mobileIcon: 'ion-navicon-round',
            showNav: true
        }
    }

    render() {
        const { classes } = useStyles();

        const scrollStart = this.props.scrollStart;

        const stickSticky = () => {
            this.setState({ headerStyle: 'headertext' });
            // document.getElementById("headertext").style.position = "fixed";
        }

        const staySticky = (obj) => {
            // this.setState({
            //     headerStyle: 'sticky'
            // })
            this.setState({ headerStyle: 'sticky' }, console.log(this.state.headerStyle));
            // if (window.innerWidth > 767 || window.innerWidth > 767) {
            // document.getElementById("headertext").style.position = "fixed";
            // }
            // else {
            //     document.getElementById("headertext").style.position = "fixed";
            // }
            console.log('gbese')
        }

        // const [values, setValues] = React.useState({
        //     headerStyle: 'headertext',
        //     mobileIcon: 'ion-navicon-round',
        //     showNav: true
        // })

        // useEffect(() => {
        //     // Update the document title using the browser API
        //     console.log(this.state.headerStyle)
        // }, [this.state.headerStyle]);

        return (
            <Waypoint onLeave={staySticky} onEnter={stickSticky} topOffset='5px' >
                <div className="firstpage" style={{ overflowX: 'hidden' }}>
                    <div
                    // className={classes.root}
                    >
                        <Grid container spacing={3}>
                            <Grid item xs={12} className='headertext2'>
                                {/* <Paper elevation={0} className={classes.paper}> */}
                                <div className={this.state.headerStyle}>
                                    <a href='#' onClick={() => this.props.func[0]()}>
                                        <div className='headertexts'>PETS</div>
                                    </a>
                                    <a href='#' onClick={() => this.props.func[1]()}>
                                        <div className='headertexts'>HOW IT WORKS</div>
                                    </a>
                                    <a href='#' onClick={() => this.props.func[2]()}>
                                        <div className='headertexts'>LOCATE US</div>
                                    </a>
                                    <a href='#' onClick={() => this.props.func[3]()}>
                                        <div className='headertexts'>MAKE PURCHASE</div>
                                    </a>
                                </div>
                                {/* </Paper> */}
                            </Grid>
                        </Grid>
                        <Grid container>
                            <div className='goodbye'>
                                GOODBYE LONLINESS
                    </div>
                        </Grid>
                        <Grid container>
                            <div className='hello'>
                                SAY HELLO TO YOUR NEW PET
                        </div>
                        </Grid>
                        <Grid container>
                            <Grid item xs={2}>
                                <a href='#' className="btn btn-full" onClick={() => this.props.func[0]()}>
                                    <Button
                                        style={{
                                            borderRadius: '24px',
                                            border: 'solid 1px #000000',
                                            position: "relative",
                                            top: '40vh',
                                            // left: '-26vw',
                                            fontSize: '1vw',
                                            color: '#FFFFFF',
                                            backgroundColor: '#000000',
                                            width: '12vw',
                                            marginLeft: '18vw'
                                        }}
                                    >
                                        Get One
                                    </Button>
                                </a>
                            </Grid>
                            <Grid item xs={1}>
                                <Button
                                    style={{
                                        borderRadius: '24px',
                                        border: 'solid 1px #000000',
                                        position: "relative",
                                        top: '40vh',
                                        // left: '-26vw',
                                        fontSize: '1vw',
                                        // color: '#FFFFFF',
                                        // backgroundColor: '#000000',
                                        width: '12vw',
                                        marginLeft: '16vw'
                                    }}
                                >
                                    Take a pet trip
                        </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div >
            </Waypoint>
        );
    }
}