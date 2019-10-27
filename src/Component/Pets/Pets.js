import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './Pets.css';

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

export default class Pets extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // const { classes } = useStyles();
        // const [spacing, setSpacing] = React.useState(2);

        return (
            <section>
                {/* <div
                    // className={classes.root}
                    style={{ overflowX: 'hidden', flexGrow: 1 }}
                > */}
                <Grid container>

                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='getpet'>
                                GET YOUR LOVELY PETS
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='getpetline' />
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Paper elevation={0}>
                            <div className='getpet1'>
                                Hello, we're Moyin Pet-shop, your new go to shop for your lovely little pets. We know you love pets and we're here to provide you with variety of pets you would love. Do take a tour around, you'll love it
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justify="center" align='center' spacing={6} style={{ width: '75vw', marginLeft: 'auto', marginRight: 'auto', marginBottom: '8vw' }}>
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
                        </Grid>
                    </Grid>



                </Grid>
                {/* </div> */}
            </section>
        );
    }
}