import React,{useState} from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import {green, purple} from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderDet from './headerdetails';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
//import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
//import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    margin: 'auto',
    width: 430,
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

export default function CustomerDetail() {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = useState({
    name: '',
    dob: '',
    gender: ''
  });


  const handleNameChange = (event) => {
    setValues({ ...values,name: event.target.value });
  };

  const handleDOBChange = (event) => {
    setValues({ ...values,dob: event.target.value });
  };

  const handleGenderChange = (event) => {
    setValues({ ...values,gender: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    
      
      sessionStorage.setItem("details",JSON.stringify(values));
      history.push('/takeselfie');
    
  };

  return (
    <Container component="main" width='50%'>
      <CssBaseline />
      <div className={classes.paper} >
          <HeaderDet />
    <Card width='100%'>
    <form onSubmit = {handleSubmit}>
      <CardActionArea>
        <CardContent>
        <Typography component="h1" variant="h5" >
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="fontSize" m={1}>
            Your full name<br/>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
                id="outlined-name"
                placeholder='eg. Raj Kumar Babu'
                fullWidth={true}
                value={values.name}
                onChange={handleNameChange}
                aria-describedby="outlined-name-helper-text"
                inputProps={{
                'aria-label': 'name',
                }}
                labelWidth={0}
            />
            <FormHelperText id="outlined-name">Ensure it matches name on your PAN</FormHelperText>
            </FormControl>
            </Box>
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="fontSize" m={1}>
            <br/>Your date of birth<br/>
            <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
            <OutlinedInput
                id="outlined-dob"
                fullWidth={true}
                value={values.dob}
                onChange={handleDOBChange}
                type="date"
                aria-describedby="outlined-dob-helper-text"
                inputProps={{
                'aria-label': 'dob',
                }}
                labelWidth={0}
            />
            </FormControl>
            </Box>
            <Box textAlign="left" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} >
                <br/>Your Gender <br/>
                <FormControl component="fieldset" >
                    <RadioGroup style={{display: 'flex', flexDirection: 'row'}} aria-label="Gender" name="GID1" value={values.gender} onChange={handleGenderChange}>
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <ColorButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            CONTINUE
          </ColorButton>
      </CardActions>
      </form>
    </Card>

    </div>
      
    </Container>
  );
}