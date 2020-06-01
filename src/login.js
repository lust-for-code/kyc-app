import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {green, purple} from '@material-ui/core/colors';
import { Box } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import {isMobile} from 'react-device-detect';


const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
  }))(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
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
}));

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

export default function LogIn() {
  const classes = useStyles();
  const history=useHistory();
  const [values, setValues] = useState({
    username: '',
    password: '',
    loggedIn: false
  });

  const handlePasswordChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  const handleUsernameChange = (event) => {
    setValues({ ...values, username: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault(); 
  //   let userData = JSON.parse(localStorage.getItem(values.username));
  //   if(userData && values.password===userData.password)
  //   {
  //     setValues({ ...values, loggedIn: true });
  //     userData.loggedIn = true;
  //     localStorage.setItem(values.username,JSON.stringify(userData));
  //     history.push({
  //       pathname: '/details',
  //       state: { userName: values.username }
  //   })
  //   }
  // };

  const errorMess=()=>{ 
    alert(`Incorrect Password or Username. Try again.`)
  }
  
  useEffect(() => {
    if(!isMobile){
       alert('KYC can be completed only on a Mobile device')
     }
 }, [])

  const handleSubmit = (event) => {
    event.preventDefault(); 

    fetch("https://saurabh-user-api.herokuapp.com/users/"+values.username)
    .then(response=>response.json())
    .then(
      (userData)=>{
        
        if(userData[0] && values.password===userData[0].password)
        {
          setValues({ ...values, loggedIn: true });
          userData[0].loggedIn = true;
          sessionStorage.setItem("lIn", true);
          sessionStorage.setItem("login",JSON.stringify(userData[0]));
          history.push("/details")
        }
        else{
          
          history.push("/")
          errorMess()
        }
      }

    )

    
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography component="h1" variant="h5">
            <Box textAlign="center" fontWeight="fontWeightBold" fontSize="h5.fontSize" m={1}>
                Hi! Welcome to Our App
            </Box>
            <Box textAlign="center" fontWeight="fontWeightRegular" fontSize="h6.fontSize" m={1}>
                One stop KYC solution
            </Box>
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Enter your username"
                name="username"
                value={values.username}
                onChange={handleUsernameChange}
                autoComplete="username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Enter your password"
                type="password"
                id="password"
                value={values.password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          </ThemeProvider>
          <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Get OTP
          </ColorButton>
        </form>
      </div>
      
    </Container>
  );
}