import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import './FeedBack.css';
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





export default class FeedBack extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = useStyles();

        return (
            <div className="feedback">
                <div
                // className={classes.root}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className='feedbacks'>
                                WHAT OUR CUSTOMERS ARE SAYING
                                </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div className='feedbackline' />
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container justify="center" align='center' spacing={6} style={{ width: '75vw', marginLeft: '16.5vw', marginRight: '12.5vw', marginBottom: '8vw', marginTop: '3vw' }}>
                                {[0, 1, 2].map(value => (
                                    <Grid
                                        key={value}
                                        item
                                        style={{
                                            width: '15vw',
                                            height: '17vw'
                                        }}
                                    >
                                        {/* <Paper
                                            // className={classes.paper}
                                            style={{
                                                width: '15vw',
                                                height: '17vw'
                                            }}
                                        > */}
                                        {words[value]}
                                        {/* </Paper> */}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div >
        );
    }
}