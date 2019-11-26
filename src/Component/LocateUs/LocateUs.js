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
        <div className='info infoheader' style={{ fontSize: '1.5vw' }}>Lagos</div>
        <div className='info infotext' style={{ fontSize: '2vw', paddingTop: '2vw' }}>
            Block 4, old martial way, Lagos
        </div>
    </div>,
    <div className='infos'>
        <div className='info infoheader' style={{ fontSize: '1.5vw' }}>Abuja</div>
        <div className='info infotext' style={{ fontSize: '2vw', paddingTop: '2vw' }}>
            4, Abiola way, Abuja
     </div>
    </div>,
    <div className='infos'>
        <div className='info infoheader' style={{ fontSize: '1.5vw' }}>Jos</div>
        <div className='info infotext' style={{ fontSize: '2vw', paddingTop: '2vw' }}>
            25, Secretariat Road, Jos
     </div>
    </div>,
    <div className='infos'>
        <div className='info infoheader' style={{ fontSize: '1.5vw' }}>Port Harcourt</div>
        <div className='info infotext' style={{ fontSize: '2vw', paddingTop: '2vw' }}>
            Block 6, Moyin Road, Port Harcourt
     </div>
    </div>
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
                className='locateussss'
                style={{ paddingBottom: '50px' }}
            >
                <Grid container>
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

                    <Waypoint onEnter={this.animite} bottomOffset="10%">
                        <Grid item xs={12}>
                            <Grid container justify="center" align='center'
                                style={{
                                    //     width: '75vw',
                                    paddingLeft: '7vw',
                                    //     marginRight: '12.5vw',
                                    //     marginBottom: '8vw',
                                    //     marginTop: '3vw'
                                }}
                            >
                                {[0, 1, 2, 3].map(value => (
                                    <Grid key={value} item className={`locateuscities ${this.state.animateStyle}`}
                                        style={{
                                            marginLeft: '1vw',
                                            // marginRight: '12.5vw',
                                            // marginBottom: '8vw',
                                            // marginTop: '1vw'
                                        }}
                                    >
                                        <Paper
                                            // className={classes.paper}
                                            style={{
                                                padding: '1vw',
                                                width: '15vw',
                                                height: '10vw',
                                                fontSize: '1vw'
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