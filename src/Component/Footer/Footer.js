import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import './Footer.css';
import { Button } from '@material-ui/core';
import { Waypoint } from 'react-waypoint';
// import React, { useState, useEffect } from "react";
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'

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

const words = [
    <div className='infos'>
        <div className='feedbackinfo infoheader'>Vaccination</div>
        <div className='feedbackinfo infotext'>
            All pets are properly vaccinated and under the care of a Veterinary Doctor.
            Pets can still remain under the same doctor after purchase or moved to preferred doctor of buyer.
        </div>
    </div>,
    <div className='infos'>
        <div className='feedbackinfo infoheader'>Vaccination</div>
        <div className='feedbackinfo infotext'>
            All pets are properly vaccinated and under the care of a Veterinary Doctor.
            Pets can still remain under the same doctor after purchase or moved to preferred doctor of buyer.
        </div>
    </div>,
    <div className='infos'>
        <div className='feedbackinfo infoheader'>Vaccination</div>
        <div className='feedbackinfo infotext'>
            All pets are properly vaccinated and under the care of a Veterinary Doctor.
            Pets can still remain under the same doctor after purchase or moved to preferred doctor of buyer.
        </div>
    </div>
]



export default class Footer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = useStyles();


        return (
            <div className="footer">
                <div
                // className={classes.root}
                >
                    <Grid container spacing={3}>
                        <Grid item xs style={{ width: '50vw' }}>
                            <div style={{ width: '25vw' }}>
                                <ul classname='footerlist'>
                                    <li id='footerlist'>About Us</li>
                                    <li id='footerlist'>Blog</li>
                                    <li id='footerlist'>Press</li>
                                    <li id='footerlist'>iOS App</li>
                                    <li id='footerlist'>Android App</li>

                                </ul>
                            </div>
                        </Grid>

                        <Grid item xs={6} />

                        <Grid item xs>
                            <ul classname='footerlogo'>
                                <li id='footerlist'><Facebook /></li>
                                <li id='footerlist'><Twitter /></li>
                                <li id='footerlist'><Instagram /></li>
                                <li id='footerlist'><LinkedIn /></li>
                            </ul>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <div style={{ padding: '20px'}}>
                            Copyright &copy; 2019 by Moyin. All right reserved.
                        </div>
                    </Grid>

                </div>
            </div >
        );
    }
}