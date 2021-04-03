import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Collapse} from '@material-ui/core'


const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background : 'rgba(0,0,0,0.5)',
    margin : '20px'
  },
  media: {
    height: 440,
  },
  title : {
    fontFamily : 'Nunito',
    fontWeight : 'bold',
    fontSize : '2rem',
    color : '#fff',
  },
  description : {
    color : '#ddd',
    fontSize : '1.1rem',
    fontFamily : 'Nunito'
  }
});

export const ImageCard = ({ card, checked }) => {
  const classes = useStyles();

  return (
  <Collapse in={checked} {...(checked ? { timeout: 1000 } : {} )}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image= {card.imageUrl}
          title={card.title}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h1" >
            {card.title}
          </Typography>
          <Typography className={classes.description} variant="body2" color="textSecondary" component="p">
            {card.description}
          </Typography>
        </CardContent>
    </Card>
  </Collapse>
  );
}