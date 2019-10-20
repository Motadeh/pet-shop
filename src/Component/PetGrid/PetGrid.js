import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './PetGrid.css';

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
        // this.state = {
        //     headerStyle: 'headertext',
        //     mobileIcon: 'ion-navicon-round',
        //     showNav: true
        // }
    }

    render() {
        // const { classes } = useStyles();
        // const [spacing, setSpacing] = React.useState(2);

        return (
            <div
                // className={classes.root}
                style={{ overflowX: 'hidden' }}
            >
                <section className="section-meals">
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/1.jpg" alt="Korean bibimbap with egg and vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/2.jpg" alt="Simple italian pizza with cherry tomatoes" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/3.jpg" alt="Chicken breast steak with vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/4.jpg" alt="Autumn pumpkin soup" />
                            </figure>
                        </li>
                    </ul>
                    <ul className="meals-showcase clearfix">
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/5.jpg" alt="Paleo beef steak with vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/6.jpg" alt="Healthy baguette with egg and vegetables" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/7.jpg" alt="Burger with cheddar and bacon" />
                            </figure>
                        </li>
                        <li>
                            <figure className="meal-photo">
                                <img src="./assets/8.jpg" alt="Granola with cherries and strawberries" />
                            </figure>
                        </li>
                    </ul>
                </section>
            </div>
        );
    }
}