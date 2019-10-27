import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './LocateUs.css';
import { Waypoint } from 'react-waypoint';


const useStyles = makeStyles(theme => ({
    root: {
        // flexGrow: 1,
    },
    paper: {
        padding: '0px',
        textAlign: 'center',
        color: theme.palette.text.secondary
    },
}));

const words = [
    <div className='infos'>
        <div className='info infoheader'>Vaccination</div>
        <div className='info infotext'>
            All pets are properly vaccinated and under the care of a Veterinary Doctor.
            Pets can still remain under the same doctor after purchase or moved to preferred doctor of buyer.
        </div>
    </div>,
    'two',
    'three',
    'four'
]

export default class LocateUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            animateStyle: ''
        }
    }

    animite = () => {
        this.setState({
            animateStyle: 'animated fadeInUp'
        })
    }

    render() {
        // const classes = useStyles();

        return (
            <div
            // className={classes.root}
            // style={{ overflowX: 'hidden' }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='locateus'>
                                YOU CAN VISIT US IN THESE CITIES
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='locateusline' />
                        </Paper>
                    </Grid>

                    <Waypoint onEnter={this.animite} bottomOffset="50%">
                        <Grid item xs={12}>
                            <Grid container justify="center" align='center' spacing={6} style={{ width: '75vw', marginLeft: '16.5vw', marginRight: '12.5vw', marginBottom: '8vw', marginTop: '3vw' }}>
                                {[0, 1, 2, 3].map(value => (
                                    <Grid key={value} item className={`locateuscities ${this.state.animateStyle}`}>
                                        <Paper
                                            // className={classes.paper}
                                            style={{
                                                width: '15vw',
                                                height: '17vw'
                                            }}
                                        >
                                            {words[value]}
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Waypoint>

                </Grid>
            </div>
        );
    }
}