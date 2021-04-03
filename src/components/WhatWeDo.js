import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {ImageCard} from './ImageCard'
import cards from '../static/CardContent'
import useWindowPosition from '../hook/useWindowPosition'


const useStyles = makeStyles((theme) => ({
    root : {},
        
    cards : {
        minHeight: '100vh',
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        [theme.breakpoints.down('md')] : {
            flexDirection: 'column'
        },
    },
    
    title : {
        color : '#fff',
        fontFamily : 'Nunito',
        fontSize : '3rem',
        textAlign : 'center'
    },
    
  }));
  


export const WhatWeDo = () => {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id='what-we-do'>
            
            <h3 className = {classes.title}>What I do</h3>

            <div className={classes.cards}>
                <ImageCard card={cards[0]} checked={checked} />
                <ImageCard card={cards[1]} checked={checked} />
                <ImageCard card={cards[2]} checked={checked} />
            </div>
        </div>
    );
}

