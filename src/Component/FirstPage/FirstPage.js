import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import './FirstPage.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
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
            </div>
        </div>
    );
}