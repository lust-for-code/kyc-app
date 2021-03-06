import React from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
 import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import {green , purple} from '@material-ui/core/colors';
//import {white} from '@material-ui/core/colors';
//import { createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderCard from './headercard';
import FooterCard from './footercard'
//import selfieIcon from './images/selfie.webp'
// import backaadhar from './images/back-aadhar.jpg'
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
//import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
//import Paper from '@material-ui/core/Paper';
import icard from './images/id-card.svg';

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
  
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);


export default function VerifyIDback() {
  const classes = useStyles();
  const history = useHistory();
  
  const handleClick = () =>{
    history.push("/cam3")
  }


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
        <CardActionArea>
            <CardContent>
        <Typography component="h1" variant="h5">
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="h6.fontSize" m={1}>
                Back of {sessionStorage.getItem('govtID')}
            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
                Your address should be clearly visible
            </Box>
        </Typography>
        </CardContent>
      
        
      <CardMedia
          component="img"
          alt="Back of ID"
          height="250"
          image={icard}
          title="Back of ID"
        />
        <CardActions>
      <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleClick}
          >
            Click Photo
          </ColorButton>
      </CardActions> 
      </CardActionArea> 
    </Card>
      </div>
      <FooterCard/>
    </Container>
  );
}