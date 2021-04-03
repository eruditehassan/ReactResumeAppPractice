import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import useWindowPosition from '../hook/useWindowPosition'
import {ImageCard} from './ImageCard'

import cards from '../static/CardContent'



const useStyles = makeStyles((theme) => ({
    root : {},
        
    
    title : {
        color : '#fff',
        fontFamily : 'Nunito',
        fontSize : '3rem',
        textAlign : 'center'
    },

    description : {
        color: '#fff',
        fontFamily: 'Nunito',
        paddingLeft: '100px',
        maxWidth: '50%'
    },
    cards : {
        display: 'flex',
        minHeight: '100vh',
        justifyContent : 'center',
        alignItems : 'center',
        [theme.breakpoints.down('md')] : {
            flexDirection: 'column'
        },
    },
    
  }));
  


export const AboutMe = () => {
    const classes = useStyles();
    const checked = useWindowPosition('what-we-do');
    return (
            <div className={classes.root} id='about-me'>
                <h1 className={classes.title}>About Me</h1>
                <div className={classes.cards}>
                    <ImageCard card={cards[3]} checked={checked} />
                    <h1 className={classes.description}>I am a Software Engineering student with strong interest in various aspects of Data Science including Data Analytics and Machine Learning.</h1>
                </div>
                
        </div>
    );
}

