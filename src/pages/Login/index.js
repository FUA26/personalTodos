import React from 'react'
import { CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { fullLogo } from '../../assets';

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
      },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    logo:{
        height: '60px'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        alignItems: 'flex-start',
    },
    contentForm:{
        margin: "15% 0px"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}))

function Login() {
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper} height="100%">
                    <img src={fullLogo} alt="logo" className={classes.logo}></img>
                    <div className={classes.contentForm}>
                        <Typography variant="h4" fontWeight={800}>
                            Hi, Welcome Back!
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={800}>
                            Login to your account
                        </Typography>
                        
                    </div>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            
        </Grid>
    )
}

export default Login
