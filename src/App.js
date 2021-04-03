import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'
import {Header} from './components/Header'
import {WhatWeDo} from './components/WhatWeDo'
import {AboutMe} from './components/AboutMe'


const useStyles = makeStyles((theme) => ({
  root : {
    minHeight: '100vh',
    backgroundImage: `url(${ process.env.PUBLIC_URL + '/assets/bg.jpg' })`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }

}));

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Header />
      <WhatWeDo />
      <AboutMe />
      <CssBaseline />
    </div>
  );
}

export default App;
