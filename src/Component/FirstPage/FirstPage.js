import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import './FirstPage.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
}));

export default function FirstPage() {
    const classes = useStyles();

    return (
        <div className="firstpage">
            <div className={classes.root}>
                <Grid container>
                    <Header />
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
                            Take a view
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div >
    );
}