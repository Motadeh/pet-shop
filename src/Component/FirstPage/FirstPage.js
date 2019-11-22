import React, { Component, useState, useEffect } from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../Header/Header';
import './FirstPage.css';
import {
    AppBar,
    Button,
    Popper,
    Grow,
    Paper,
    ClickAwayListener,
    MenuList,
    MenuItem,
    Menu,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Divider, Drawer, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, IconButton
} from '@material-ui/core';
import clsx from 'clsx';
import { Waypoint } from 'react-waypoint';
// import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';


// const useStyles = (theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: '0px',
//         textAlign: 'center',
//         // color: theme.palette.text.secondary
//     },
// }));

const styles = {
    link: {
        textDecoration: "none"
    }
};

const drawerWidth = "60vw";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        },
        title: {
            flexGrow: 1,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -drawerWidth,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },

        root2: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
        fullList: {
            width: "60vw",
            // backgroundColor: '#cccccc'
        },
    }),
);


// const [values, setValues] = React.useState({
//     headerStyle: 'headertext',
//     mobileIcon: 'ion-navicon-round',
//     showNav: true
// })




export default class FirstPage extends React.Component {

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

        // const scrollStart = this.props.scrollStart;

        const classes = useStyles;
        const theme = useTheme;
        // const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            this.setState({ open: true });
        };

        const handleDrawerClose = () => {
            this.setState({ open: false });
        };

        // const [values, setValues] = React.useState({
        //     headerStyle: 'headertext',
        //     mobileIcon: 'ion-navicon-round',
        //     showNav: true
        // })

        // useEffect(() => {
        //     // Update the document title using the browser API
        //     console.log(this.state.headerStyle)
        // }, [this.state.headerStyle]);

        return (
            // <Waypoint onLeave={staySticky} onEnter={stickSticky} topOffset="50%">
            <div className="firstpage" style={{ overflowX: 'hidden' }}>
                <div
                // className={classes.root}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={12} className='headertext2'>
                            <div className={this.state.headerStyle}>
                                <a href='#' onClick={() => this.props.func[0]()}>
                                    <div className='headertexts'>HOME</div>
                                </a>

                                <a href='#' onClick={() => this.props.func[1]()}>
                                    <div className='headertexts'>ABOUT US</div>
                                </a>

                                <Link to="/moyin/services" style={styles.link}>
                                    <div className='headertexts'>SERVICES</div>
                                </Link>

                                <a href='#' onClick={() => this.props.func[2]()}>
                                    <div className='headertexts'>LOCATE US</div>
                                </a>

                                <a href='#' onClick={() => this.props.func[3]()}>
                                    <div className='headertexts'>CONTACT US</div>
                                </a>
                            </div>
                            <div className="sidebar2">
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={handleDrawerOpen}
                                    className={clsx(this.state.open && classes.hide)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Drawer
                                    className={classes.drawer}
                                    variant="persistent"
                                    anchor="right"
                                    open={this.state.open}
                                    classes={{
                                        paper: classes.drawerPaper,
                                    }}
                                >
                                    <div
                                        className={classes.drawerHeader}
                                    >
                                        <IconButton onClick={handleDrawerClose}>
                                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                        </IconButton>
                                    </div>
                                    <Divider />
                                    {/* {fullList('right')} */}
                                    <List>
                                        {[
                                            <a href='#' onClick={() => this.props.func[0]()}>
                                                <div className='headertexts'>HOME</div>
                                            </a>,

                                            <a href='#' onClick={() => this.props.func[1]()}>
                                                <div className='headertexts'>ABOUT US</div>
                                            </a>,

                                            <Link to="/moyin/services" style={styles.link}>
                                                <div className='headertexts'>SERVICES</div>
                                            </Link>,

                                            <a href='#' onClick={() => this.props.func[2]()}>
                                                <div className='headertexts'>LOCATE US</div>
                                            </a>,

                                            <a href='#' onClick={() => this.props.func[3]()}>
                                                <div className='headertexts'>CONTACT US</div>
                                            </a>
                                        ].map((text, index) => (
                                            <ListItem button key={text} onClick={handleDrawerClose}>
                                                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Drawer>
                            </div>
                        </Grid>
                    </Grid>
                    {/* <Header func={this.props.func}/> */}
                    <Grid container>
                        <div className='goodbye'>
                            GOODBYE LONLINESS
                            </div>
                    </Grid>
                    <Grid container>
                        <div className='hello'>
                            SAY HELLO TO YOUR NEW PET
                        </div>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2}>
                            <a href='#' className="btn btn-full" onClick={() => this.props.func[0]()}>
                                <Button
                                    style={{
                                        borderRadius: '24px',
                                        border: 'solid 1px #70483C',
                                        position: "relative",
                                        top: '40vh',
                                        // left: '-26vw',
                                        fontSize: '1vw',
                                        color: '#FFFFFF',
                                        backgroundColor: '#70483C',
                                        width: '12vw',
                                        marginLeft: '18vw'
                                    }}
                                >
                                    Get One
                                    </Button>
                            </a>
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                style={{
                                    borderRadius: '24px',
                                    border: 'solid 1px #70483C',
                                    position: "relative",
                                    top: '40vh',
                                    // left: '-26vw',
                                    fontSize: '1vw',
                                    color: '#70483C',
                                    // backgroundColor: '#000000',
                                    width: '12vw',
                                    marginLeft: '16vw'
                                }}
                            >
                                Take a pet trip
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </div >
            // </Waypoint>
        );
    }
}