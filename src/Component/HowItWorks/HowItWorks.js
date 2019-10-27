import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './HowItWorks.css';
import { Waypoint } from 'react-waypoint';
import appiPhone from '../app-iPhone.png'
import apple from '../download-app.svg'
import android from '../download-app-android.png'



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

export default class HowItWorks extends React.Component {

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
            <section className='section-howitworks'
            // className={classes.root}
            // style={{ overflowX: 'hidden' }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='howitworks'>
                                HOW IT WORKS
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='howitworksline' />
                        </Paper>
                    </Grid>

                    {/* <Grid item xs={4} className='row'> */}
                        <div className='row'>
                            <Waypoint onEnter={this.animite} bottomOffset="50%">
                                <div>
                                    <img src={appiPhone} alt="Omnifood Iphone app" className={`app-screen js--wp-2 ${this.state.animateStyle}`} />
                                </div>
                            </Waypoint>
                            <div className="col span-1-of-2 steps-box">
                                <div className="works-step">
                                    <div>1</div>
                                    <p>Choose the subscription plan that best fits your needs and sign up today</p>
                                </div>
                                <div className="works-step">
                                    <div>2</div>
                                    <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
                                </div>
                                <div className="works-step">
                                    <div>3</div>
                                    <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
                                </div>
                                <a href="#" className="btn-app"><img src={apple} alt="App Store button" /></a>
                                <a href="#" className="btn-app"><img src={android} alt="Play Store button" /></a>
                            </div>
                        </div>
                    {/* </Grid> */}
                </Grid>
            </section>
        );
    }
}