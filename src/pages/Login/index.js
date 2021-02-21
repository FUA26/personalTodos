import React from 'react'
import { CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core'
import { fullLogo, illus1 } from '../../assets';
import FormLogin from '../../components/molecules/FormLogin';

const useStyles = makeStyles((theme)=>({
    root: {
        height: '100vh',
      },
    imageSide: {
        display: "flex",
        alignItems: "center",
        justifyContent:"center",        
        flexDirection: 'column',     },
    logo:{
        height: '60px'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(4),
        alignItems: 'flex-start',
        height: "100%"
    },
    contentForm:{
        display:"flex",
        margin: "15% 0px",      
        flexDirection: 'column',      
        justifyContent:"center", 
        height: "100%"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    img:{
        width: "80%"
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
                        <Typography variant="h1" fontWeight={800}>
                            Hi,
                        </Typography>
                        <Typography variant="h1" fontWeight={800} color="secondary">
                            Welcome Back!
                        </Typography>
                        <Typography variant="subtitle1" fontWeight={800}>
                            Login to your account
                        </Typography>
                        <FormLogin></FormLogin>
                    </div>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.imageSide}>
                <img src={illus1} alt="ilustrasi 1" className={classes.img}></img>
                <div className={classes.submit}>
                    <Typography variant="h1" gutterBottom color="primary" align="center">
                        Wofh Apps
                    </Typography>
                    <Typography variant="h4" gutterBottom color="secondary">
                        Working form Home Application
                    </Typography>
                </div>

            </Grid>
        </Grid>
    )
}

export default Login
