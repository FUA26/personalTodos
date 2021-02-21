import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { illus4 } from '../../assets'

const useStyles = makeStyles((theme)=>({
  root: {
      height: '80vh',
      display:"flex",
      alignItems:"center",       
      flexDirection: 'column',
      padding: theme.spacing(5),
    },
  img:{
      width: "60%",
      margin: theme.spacing(5),
  }
}))

function Constraction() {
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={illus4} alt="illus 3" className={classes.img}></img>
      <Typography variant="h1" gutterBottom color="primary" align="center">
          On Progress 🚀🚀🚀
      </Typography>
    </div>
  )
}

export default Constraction
