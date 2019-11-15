import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Services.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";

const styles = {
    link: {
        textDecoration: "none"
    }
};

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

export default class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerStyle: 'headertext',
            mobileIcon: 'ion-navicon-round',
            showNav: true
        }
    }


    render() {
        // const { classes } = useStyles();
        // const [spacing, setSpacing] = React.useState(2);

        const stickSticky = () => {
            this.setState({ headerStyle: 'headertext' });
        }

        const staySticky = (obj) => {
            this.setState({ headerStyle: 'sticky' }, console.log(this.state.headerStyle));
            console.log('gbese')
        }

        return (
            <div className='services'>
                {/* <div
                    // className={classes.root}
                    style={{ overflowX: 'hidden', flexGrow: 1 }}
                > */}
                <Grid container>

                    <Grid container spacing={3}>
                        <Grid item xs={12} className='headertext2'>
                            {/* <Paper elevation={0} className={classes.paper}> */}
                            <div className={this.state.headerStyle}>
                                <Link to="/moyin#home">
                                    <div className='headertexts'>HOME</div>
                                </Link>

                                <Link to="/moyin#aboutus">
                                    <div className='headertexts'>ABOUT US</div>
                                </Link>

                                <Link to="/moyin/services" style={styles.link}>
                                    <div className='headertexts'>SERVICES</div>
                                </Link>

                                <Link to="/moyin#locateus">
                                    <div className='headertexts'>LOCATE US</div>
                                </Link>
                                
                                <Link to="/moyin#contact">
                                    <div className='headertexts'>CONTACT US</div>
                                </Link>
                            </div>
                            {/* </Paper> */}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className='services1'>
                        <Paper elevation={0}>
                            <div>
                                GET YOUR LOVELY PETS
                            </div>
                        </Paper>
                    </Grid>

                    {/* <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='getpetline' />
                        </Paper>
                    </Grid> */}

                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='services2'>
                                Hello, we're Moyin Pet-shop, your new go to shop for your lovely little pets.
                                We know you love pets and we're here to provide you with variety of pets you would love.
                                Do take a tour around, you'll love it
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justify="center" align='center' spacing={6} style={{ width: '75vw', marginLeft: 'auto', marginRight: 'auto', marginBottom: '8vw' }}>
                            <div className='services3'>
                                {[0, 1, 2, 3].map(value => (
                                    <Grid key={value} item>
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
                            </div>
                        </Grid>
                    </Grid>



                </Grid>
                {/* </div> */}
            </div>
        );
    }
}