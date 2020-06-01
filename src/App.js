import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import LogIn from './login';
import CustomerDetail from './customerdetails.js';
import TakeSelfie from './takeselfie';
import SelfiePreview from './selfiepreview.js'
import VerifyID from './verifyid';
import IDPreview from './idpreview';
import Cam from './cam'
import Cam2 from './cam2'
import Cam3 from './cam3'
import IDPreviewback from './idpreviewback';
import Success from './successpopup';
import VerifyIDback from './verifyidback';
import PageNotFound from './notfound';
import ProtectedRoute from './privateroute';
import LastPage from './lastpage'
import ImgMediaCard from './successpopup'
import CamDeny from './camDeny'
//import { Switch } from '@material-ui/core';

function App() {
    return ( 
        <Router>
            <div>
                <Switch>
                <Route path="/" exact component={LogIn}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/details" exact component={CustomerDetail}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/takeselfie" exact component={TakeSelfie}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/selfiepreview" exact component={SelfiePreview}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/verifyid" exact component={VerifyID}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/camDeny" exact component={CamDeny}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/idpreview" exact component={IDPreview}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/cam" exact component={Cam}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/successpage" exact component={Success}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/cam2" exact component={Cam2}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/cam3" exact component={Cam3}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/idpreviewback" exact component={IDPreviewback}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/verifyidback" exact component={VerifyIDback}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/lastpage" exact component={LastPage}/>
                <ProtectedRoute user={sessionStorage.getItem('lIn')} path="/successpopup" exact component={ImgMediaCard}/>
                <ProtectedRoute path="*" exact component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;