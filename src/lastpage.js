import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
//import {green , purple} from '@material-ui/core/colors';
//import {white} from '@material-ui/core/colors';
//import { createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderCard from './headercard';
import FooterCard2 from './footercard2'
//import selfieIcon from './images/selfie.webp'
//import front from './images/front1.jpg'
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
//import { useHistory } from 'react-router-dom';
//import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },

  mar: {
  marginBottom: theme.spacing(5),
  }, 

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(20),
  },
}));

/*const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    spacing: 4,
  }); */
  

export default function LastPage() {
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <HeaderCard mainTitle={"Verify Your Identity"} subTitle ={"Please upload a Government ID for KYC verification"} />
    <Card>
      
        <CardContent>
        <Typography component="h1" variant="h5">
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="h6.fontSize" m={1}>
                Your Government ID
            </Box>
            </Typography>
        </CardContent>
        

        <Grid container spacing={2} 
        direction="row"
        justify="center"
        alignItems="center"
        >

        <Grid item xs={3} />
        <Grid item xs={6} >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          width="100%"
          image={sessionStorage.getItem("idfront")}
          title="Front of ID"
        />  
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={6}>
        <CardMedia
        className={classes.mar}
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          width="100%"
          image={sessionStorage.getItem("idback")}
          title="Back of ID"
        />
        </Grid>
        
      </Grid>
      <Typography >
        
      </Typography>
        </Card>
      </div>
      <FooterCard2/>
    </Container>
  );
}