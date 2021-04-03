import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, IconButton, Toolbar, Collapse} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    },
    appbar : {
        background: 'none',
        fontFamily: 'Nunito'
    },
    appBarTitle : {
        flexGrow : '1',
    },
    appBarWrapper : {
        width: '80%',
        margin : '0 auto'
    },
    icon : {
        color: '#fff',
        fontSize: '2rem'
    },
    menuItem : {
        fontFamily : 'Nunito',
        fontSize: '1.3rem'
    },
    abtitleColor : {
        color: '#5AFF3D'
    },
    
    title : {
        color : '#fff',
        fontFamily : 'Nunito',
        fontSize : '4.5rem'
    },

    container : {
        textAlign : 'center',
    },

    godown : {
        color: '#5AFF3D',
        fontSize: '4rem'
    }


  }));
  


export const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    },[])

    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation = {0}>
                <Toolbar className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle}>
                        Hassan Raza<span className={classes.abtitleColor}> Bukhari</span>
                    </h1>
                    <Scroll to='about-me' smooth={true}>
                        <IconButton color="inherit" >
                            <span className={classes.menuItem}>About Me</span>
                        </IconButton>
                    </Scroll>
                    <Scroll to='what-we-do' smooth={true}>
                        <IconButton color="inherit" >
                            <span className={classes.menuItem}>What I do</span>
                        </IconButton>
                    </Scroll>
                    <IconButton color="inherit" >
                    <span className={classes.menuItem}>Sample Page 1</span>
                    </IconButton>
                    <IconButton color="inherit" >
                    <span className={classes.menuItem}>Sample Page 2</span>
                    </IconButton>
                    
                    
                </Toolbar>

            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {} )}
                collapsedHeight= {50}>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Welcome to <br /> my <span className={classes.abtitleColor}>website</span>
                </h1>
                <Scroll to='what-we-do' smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.godown} />
                    </IconButton>
                </Scroll>
            </div>
            </Collapse>
            
        </div>
    );
}

