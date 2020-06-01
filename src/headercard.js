import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import idscan from './images/idscan.jpg';
import Avatar from '@material-ui/core/Avatar';

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

export default function HeaderCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <Avatar className={classes.avatar} src={idscan} />
          </Grid>
          <Grid item xs={9} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography component="h1" variant="h5">
            <Box textAlign="left" fontWeight="fontWeightBold" fontSize="h6.fontSize" m={1}>
                {props.mainTitle}
            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
                {props.subTitle}
            </Box>
        </Typography>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}