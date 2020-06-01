import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
// import idscan from './images/idscan.jpg';
// import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Button from '@material-ui/core/Button';
//import {green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // marginTop: theme.spacing(16),
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
}));

/*const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[50],
    '&:hover': {
      backgroundColor: green[50],
    },
  },
}))(Button);*/

export default function FooterCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          {/* <Grid item>
          <Avatar className={classes.avatar} src={idscan} />
          </Grid> */}
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography component="h1" variant="h5">
              <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
                Your ID or Photo will be used only for KYC purpose
            </Box>
        </Typography>
        
              </Grid>

            </Grid>
          </Grid>
        </Grid>
       
        <Button variant="outlined" fullWidth={true}>SAVE & CONTINUE</Button>
         
      </Paper>
      
    </div>
  );
}