import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './PetGrid.css';
import dogs from '../dogs.jpg'
import cats from '../cats.jpeg'
import rabbit from '../rabbit.jpeg'
import fish from '../fish.jpeg'
import hare from '../hare.jpeg'
import parrot from '../parrot.jpeg'
import cute from '../cute.jpeg'
import monkey from '../monkey.jpeg'




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

export default class PetGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        // const { classes } = useStyles();
        // const [spacing, setSpacing] = React.useState(2);

        return (
            // <section>
            //     <div
            //     // className={classes.root}
            //     // style={{ overflowX: 'hidden' }}
            //     >
            //         <Grid container spacing={3}>
            <Grid container>

                <section className="section-meals">
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src={dogs} alt="dogs" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={cats} alt="cats" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={rabbit} alt="rabbits" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={fish} alt="fish" />
                            </figure>
                        </li>
                    </ul>
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src={hare} alt="hare" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={parrot} alt="parrot" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={cute} alt="cute" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src={monkey} alt="monkey" />
                            </figure>
                        </li>
                    </ul>
                </section>
            </Grid>

            //     </div>
            // </section>
        );
    }
}