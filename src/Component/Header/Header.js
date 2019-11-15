import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Waypoint } from 'react-waypoint';
import './Header.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

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

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerStyle: 'headertext',
            mobileIcon: 'ion-navicon-round',
            showNav: true
        }
    }

    render() {
        // const classes = useStyles();

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

        const stickSticky = () => {
            this.setState({ headerStyle: 'headertext' });
            // document.getElementById("headertext").style.position = "fixed";
        }

        const staySticky = (obj) => {
            // this.setState({
            //     headerStyle: 'sticky'
            // })
            this.setState({ headerStyle: 'sticky' }, console.log(this.state.headerStyle));
            // if (window.innerWidth > 767 || window.innerWidth > 767) {
            // document.getElementById("headertext").style.position = "fixed";
            // }
            // else {
            //     document.getElementById("headertext").style.position = "fixed";
            // }
            console.log('gbese')
        }

        return (
            // <Waypoint onLeave={staySticky} onEnter={stickSticky} topOffset='60px' >
            <div
                className='sticky'
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} className='headertext2'>
                        {/* <Paper elevation={0} className={classes.paper}> */}
                        <div className='sticky'>
                            <a href='#'
                                onClick={() => this.props.func[0]()}
                            >
                                <div className='headertexts'>HOME</div>
                            </a>
                            <a href='#' onClick={() => this.props.func[1]()}>
                                <div className='headertexts'>ABOUT US</div>
                            </a>
                            {/* <a href='#'
                                        // onClick={() => this.props.func[2]()}
                                    > */}
                            <Link to="/moyin/services" style={styles.link}>
                                <div className='headertexts'>SERVICES</div>
                            </Link>
                            {/* <div className='headertexts'>SERVICES</div> */}
                            {/* </a> */}
                            <a href='#' onClick={() => this.props.func[4]()}>
                                <div className='headertexts'>LOCATE US</div>
                            </a>
                            <a href='#'
                                onClick={() => this.props.func[4]()}
                            >
                                <div className='headertexts'>CONTACT US</div>
                            </a>
                        </div>
                        {/* </Paper> */}
                    </Grid>
                </Grid>
            </div>
            // </Waypoint>
        );
    }
}