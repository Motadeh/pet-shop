import React, { Component } from 'react';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Waypoint } from 'react-waypoint';
import './Header.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import clsx from 'clsx';
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';


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

export default class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerStyle: 'headertext',
            mobileIcon: 'ion-navicon-round',
            showNav: true,
            open: false
        }
    }

    render() {

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
            // <Waypoint onLeave={staySticky} onEnter={stickSticky} topOffset='60px' >
            <div
            // className='sticky'
            >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <div className='sticky'>
                            <a href='#' onClick={() => this.props.func[0]()}>
                                <div className='headertexts'>HOME</div>
                            </a>

                            <a href='#' onClick={() => this.props.func[1]()}>
                                <div className='headertexts'>ABOUT US</div>
                            </a>

                            <Link to="/moyin/services" style={styles.link}>
                                <div className='headertexts'>SERVICES</div>
                            </Link>

                            <Link to="/moyin#locateus">
                                <div className='headertexts'>LOCATE US</div>
                            </Link>

                            <a href='#' onClick={() => this.props.func[3]()}>
                                <div className='headertexts'>CONTACT US</div>
                            </a>
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
            </div>
            // </Waypoint>
        );
    }
}