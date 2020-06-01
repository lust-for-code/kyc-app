import React, {useState} from 'react';
import { makeStyles , withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import {green, purple} from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderCard from './headercard';
import icard from './images/id-card.svg';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FooterCard from './footercard'
import { useHistory } from 'react-router-dom';
//import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
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

export default function VerifyID() {
  const classes = useStyles();
  const history = useHistory();
  const [govtID, setgovtID] = useState('Aadhaar');

  const handleChange = (event) => {
    setgovtID(event.target.value);
  };

  const handleClick = ()=>{
    history.push("/cam2")
    sessionStorage.setItem('govtID', govtID);
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
                    Select a government ID
            </Box>
            <Box textAlign="center" fontWeight="fontWeightRegular" fontSize="fontSize" m={1} color="text.secondary">
                <FormControl component="fieldset">
                    <RadioGroup style={{display: 'flex', flexDirection: 'row'}} aria-label="Government ID" name="GID1" value={govtID} onChange={handleChange}>
                        <FormControlLabel value="Aadhaar" control={<Radio />} label="Aadhaar" />
                        <FormControlLabel value="Voter ID" control={<Radio />} label="Voter ID" />
                        <FormControlLabel value="Passport" control={<Radio />} label="Passport" />
                        <FormControlLabel value="Driving License" control={<Radio />} label="Driving License" />
                        <FormControlLabel value="PAN" control={<Radio />} label="PAN" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="h6.fontSize" m={1}>
                    Front of {govtID}
            </Box>
            <Box textAlign="left" fontWeight="fontWeightMedium" fontSize="fontSize" m={1}>
                    Your name and photo should be clearly visible
            </Box>
        </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardMedia
          component="img"
          alt="Front of ID"
          height="245"
          image={icard}
          title="Front of ID"
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
            CLICK PHOTO
          </ColorButton>
      </CardActions>
    </Card>

    </div>
      <FooterCard />
    </Container>
  );
}