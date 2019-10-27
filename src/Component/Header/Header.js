import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Waypoint } from 'react-waypoint';
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

// interface State {
//     name: string;
//     email: string;
//     company: string;
//     phonenumber: number;
//     message: string;
// }

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (window.innerWidth > 767 || window.innerWidth > 767) {
//     document.getElementById("headertext").style.position = "absolute";
//   } 
//   else {
//     document.getElementById("headertext").style.position = "fixed";
//   }
// }

export default function Header() {
    const classes = useStyles();

    // const [values, setValues] = React.useState({
    //     headerStyle: '',
    //     mobileIcon: 'ion-navicon-round',
    //     showNav: true
    // })

    // this.state = {
    //     headerStyle: '',
    //     mobileIcon: 'ion-navicon-round',
    //     showNav: true
    // }
    // UNSAFE_componentWillMount() {
    //     // if (window.innerWidth < 767 ) {
    //     //     setValues({ ...values, [name]: event.target.value })
    //     // }
    // }

    // const staySticky = (obj) => {
    //     // this.setState({
    //     //     headerStyle: 'sticky'
    //     // })
    //     setValues({ headerStyle: 'fixed' });
    //     if (window.innerWidth > 767 || window.innerWidth > 767) {
    //         document.getElementById("headertext").style.position = "absolute";
    //     }
    //     else {
    //         document.getElementById("headertext").style.position = "fixed";
    //     }
    //     console.log('gbese')
    // }

    // const stickSticky = () => {
    //     setValues({ headerStyle: '' });
    // }

    return (
        // <Waypoint onLeave={staySticky} onEnter={stickSticky} topOffset='60px' >
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        {/* <Paper elevation={0} className={classes.paper}> */}
                        <div className='headertext' id='headertext'>
                            <div className='headertexts'>PETS</div>
                            <div className='headertexts'>WHAT WE DO</div>
                            <div className='headertexts'>LOCATE US</div>
                            <div className='headertexts'>MAKE PURCHASE</div>
                        </div>
                        {/* </Paper> */}
                    </Grid>
                </Grid>
            </div>
        // </Waypoint>
    );
}