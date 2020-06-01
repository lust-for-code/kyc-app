import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
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
import success from './greentick.png';
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
    marginTop: theme.spacing(16),
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
    <Card>
        <Grid container spacing={2} 
        direction="row"
        justify="center"
        alignItems="center"
        >

        <Grid item xs={3} />
        <Grid item xs={6} >
        </Grid>
        <Grid item xs={3} />
        <Grid item xs={4}>
        <CardMedia
        className={classes.mar}
          component="img"
          alt="Contemplative Reptile"
          height="100%"
          width="100%"
          image={success}
          title="Back of ID"
        />
        </Grid>
        
      </Grid>
      <CardContent>
        <Typography component="h1" variant="h5">
            <Box textAlign="center" fontWeight="fontWeightMedium" fontSize="h5.fontSize" m={1}>
                KYC Successful!
            </Box>
            </Typography>
        </CardContent>
        </Card>
      </div>
    </Container>
  );
}