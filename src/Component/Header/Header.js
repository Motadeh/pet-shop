import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Header.css';

const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper elevation={0} className={classes.paper}>
                        <div className='headertext'>
                            <div className='headertexts'>PETS</div>
                            <div className='headertexts'>HOW IT WORKS</div>
                            <div className='headertexts'>LOCATE US</div>
                            <div className='headertexts'>MAKE PURCHASE</div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}