import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { illus2 } from '../../assets'


const useStyles = makeStyles((theme)=>({
  root:{
    display:"flex",
    height: "80vh",
    padding: theme.spacing(4),
    alignItems: "center",
    flexDirection:"column"
  },
  contentWarp:{

  },
  subtitle:{
    width:"80%",
    margin: "15px auto"
  },
  img:{
      width: "30%",
      margin: theme.spacing(4)
  }
}))

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
          <img src={illus2} alt="illus 3" className={classes.img}></img>
        <div>
          <Typography variant="h1" align="center">
            Wofh Apps Dashboard
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle} align="center">
            <b><i>Working form Home Apllication</i></b> atau WohfApps ini merupakan aplikasi yang saya buat untuk mempermudah saya selama melakukan WFH. Ide ini muncul karena permasalahan yang saya alami, dimana untuk setiap kebutuhan selama WFH terpisah - pisah menggunakan beberapa aplikasi yang berbeda. Seperti untuk absensi harus menggunakan aplikasi A, untuk task dan pelaporan harian menggunakan aplikasi B, untuk chating menggunakan aplikasi C, Meeting Call menggunkana aplikasi D dan seterusnya.
            Saya mencoba untuk membuat sebuah aplikasi untuk menyelesaikan permasalahan tersebut. Aplikasi ini akan terus dikembangkan karena selain sebagai solusi dari permasalahan, aplikasi ini juga sebagai wadah saya untuk melakukan reserch tentang web development.
          </Typography>
        </div>
    </div>
  )
}

export default Main
