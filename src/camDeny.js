import React from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import {green, purple} from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderCard from './headercard';
// import Steps from './images/steps.jpg'
import {useHistory} from 'react-router-dom';

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
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(Button);

export default function TakeSelfie() {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () =>{
    history.push("/cam")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <HeaderCard mainTitle={"Verify Your Identity"} subTitle ={"Please upload a Selfie and provide personal details for KYC verification"} />
    <Card>
      <CardActionArea>
        <CardContent>
        <Typography component="h1" variant="h5">
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="h6.fontSize" m={1}>
                Camera Access 
            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
                You need to give permission to access your camera for KYC process
            </Box>
        </Typography>
        </CardContent>
      </CardActionArea>
      
      {/* <CardMedia
          component="img"
          alt="Steps"
          height="280"
          image={Steps}
          title="Steps"
        /> */}
        <CardContent>
        <Typography component="h1" variant="h5">
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="fontSize" m={1}>
                Steps to give camera access for chrome users : 
            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
            1) To the right of the address bar, tap More (triple dots) and then Settings.

            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
            2) Tap Site Settings.

            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
            3) Tap Microphone or Camera.

            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
            4) Tap to turn the camera on or off.

            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
            5) If you see the site under Blocked, tap the site and then allow Access your camera.

            </Box>
        </Typography>
        </CardContent>
      <CardActions>
      <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleClick}
          >
            Click Selfie
          </ColorButton>
      </CardActions>
    </Card>

    </div>
      
    </Container>
  );
}
