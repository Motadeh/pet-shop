import React, { Component } from 'react';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
import './Services.css';
import { BrowserRouter, Link, NavLink, Route, Switch } from "react-router-dom";
import DogWalking from '../download.png';
import Vet from '../vet.jpeg';
import Feeding from '../feeding.png';
import Sitting from '../sitting.jpeg';
import Typography from '@material-ui/core/Typography';
import Footer from '../Footer/Footer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';




const styles = {
    link: {
        textDecoration: "none"
    }
};

// const useStyles = makeStyles(theme => ({
//     root: {
//         // flexGrow: 1,
//     },
//     paper: {
//         padding: '0px',
//         textAlign: 'center',
//         color: theme.palette.text.secondary
//     },
// }));

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

const words = {
    0: [
        <div className='wordsheader'>
            Dog Walking
        </div>,
        <div className='words'>
            {/* <img /> */}
            There are various benefits walking does to a dog. Don't let your dog miss
            out of the various benefits. We provide Dog walking service for those who
            would want such for their dogs but cannot do it personally.
        </div>,
        <img src={DogWalking} className='circle' />
    ],
    1: [
        <div className='wordsheader'>
            Verterinary
        </div>,
        <div className='words'>
            We have certfied Verterinary doctors who provide health care services for
            pet owners looking for such services.
        </div>,
        <img src={Vet} className='circle2' />
    ],
    2: [
        <div className='wordsheader'>
            Pet Feeding
        </div>,
        <div className='words'>
            We provide feeding advice and routine from certified specialist for pet owners.
            Ranges from frequency of feeding to food content and solutions.
        </div>,
        <img src={Feeding} className='circle3' />
    ],
    3: [
        <div className='wordsheader'>
            Pet Sitting
        </div>,
        <div className='words'>
            Pet owners coould get busy or unavailable at any time. We can help watch over your
            pets while you get busy or go for those important meetings
        </div>,
        <img src={Sitting} className='circle4' />
    ],
    4: [
        <div className='wordsheader'>
            Pet Grooming
        </div>,
        <div className='words'>
            Need pet grooming for dog? We are available to provide you with the necessary
            hygiene and cleaning service.
        </div>,
        <img src={Vet} className='circle5' />
    ]
}

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

        // const stickSticky = () => {
        //     this.setState({ headerStyle: 'headertext' });
        // }

        // const staySticky = (obj) => {
        //     this.setState({ headerStyle: 'sticky' }, console.log(this.state.headerStyle));
        //     console.log('gbese')
        // }

        const classes = useStyles;
        const theme = useTheme;
        // const [open, setOpen] = React.useState(false);

        const handleDrawerOpen = () => {
            this.setState({ open: true });
        };

        const handleDrawerClose = () => {
            this.setState({ open: false });
        };

        return (
            <div
                // className='services'
            >
                <Grid container className='services'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className='sticky'>
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
                            <div className="sidebar">
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
                                            <Link to="/moyin#home">
                                                <div className='headertexts'>HOME</div>
                                            </Link>,

                                            <Link to="/moyin#aboutus">
                                                <div className='headertexts'>ABOUT US</div>
                                            </Link>,

                                            <Link to="/moyin/services" style={styles.link}>
                                                <div className='headertexts'>SERVICES</div>
                                            </Link>,

                                            <Link to="/moyin#locateus">
                                                <div className='headertexts'>LOCATE US</div>
                                            </Link>,

                                            <Link to="/moyin#contact">
                                                <div className='headertexts'>CONTACT US</div>
                                            </Link>
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

                    <Grid container className='servicestest'>
                        <Grid item xs={12}>
                            <Grid container justify="center" spacing={5} style={{ width: '100vw', marginLeft: 'auto', marginRight: 'auto' }}>
                                {[0, 1, 2, 3, 4].map(value => (
                                    <Grid key={value} item>
                                        {/* <div style={{ backgroundColor: '#808080', width: '50vw', height: '10vw' }}>
                                        {words["Dog walking"][value]}
                                    </div> */}
                                        <Paper
                                            // className='servicestestpaper'
                                            style={{ width: '17vw', height: '17vw', paddingTop: '5vw' }}
                                        >
                                            {/* <Typography noWrap> */}
                                            {words[value][0]}
                                            {words[value][1]}
                                            {/* </Typography> */}
                                        </Paper>
                                        {/* <div className='circle'> */}
                                        {words[value][2]}
                                        {/* </div> */}
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container  className='footerservice'>
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        );
    }
}