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

const words = [
    <div className='infos'>
        <div className='info infoheader'>Sales</div>
        <div className='info infotext'>
            We sell pets for those who would like to get new pets. All pets sold here are properly vaccinated and well fed
        </div>
    </div>,
    <div className='infos'>
        <div className='info infoheader'>Services</div>
        <div className='info infotext'>
            <div style={{textAlign: 'left', paddingBottom: '5px'}}>
                We have various vetinary doctors and offer health care services for pets.
            </div>
            <div style={{textAlign: 'left'}}>
                We offer home services such as dog walking, feeding, petsitting, pet grooming
            </div>
        </div>
    </div>,
    <div className='infos'>
        <div className='info infoheader'>Pet Shop</div>
        <div className='info infotext'>
            We sell foods, accessories and toys for pets
        </div>
    </div>
]


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
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='howitworks'>
                                ABOUT US
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
                        <Waypoint onEnter={this.animite} bottomOffset="50%">
                            <Grid item xs={12}>
                                <Grid container justify="center" align='center' direction='column'
                                    style={{
                                        paddingLeft: '6vw',
                                        // marginRight: '12.5vw',
                                        // marginBottom: '8vw',
                                        // marginTop: '3vw'
                                    }}
                                >
                                    {[0, 1, 2].map(value => (
                                        <Grid key={value} item className={`locateuscities${value} ${this.state.animateStyle}`}
                                            style={{
                                                // marginLeft: '10vw',
                                                // marginRight: '12.5vw',
                                                // marginBottom: '8vw',
                                                marginTop: '1vw'
                                            }}
                                        >
                                            <Paper
                                                className='paper'
                                            // style={{
                                            //     padding: '2vw',
                                            //     width: '30vw',
                                            //     height: 'auto'
                                            // }}
                                            >
                                                {words[value]}
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Waypoint>

                    </div>
                    {/* </Grid> */}
                </Grid>
            </section>
        );
    }
}