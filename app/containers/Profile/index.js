/**
 * Profile screen
 *
 * This screen shows the user profile
 */

import React, {useState} from 'react';
import { MobileView } from 'react-device-detect';
import { Grid } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

import BottomDrawer from '../../components/BottomDrawer';
import HeaderWave from '../../components/HeaderWave';
import {browserRedirect} from '../../helpers/helpers';

const editIcon = require('../../images/edit_icon.png');
const profilePhoto = require('../../images/user_details.png');
const rightArrow = require('../../images/right_arrow.png');

import './profile.css';

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#5786f8',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 21,
      height: 21,
      margin: '1px 0px'
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: '#959fba',
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

export default function Profile() {
     const [state, setState] = useState({
         camera_uploads: true,
         data_for_file_transfer: false
     })

     const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    return (
        <MobileView style={{ height: '100vh' }}>
            <div className="outer-div" style={{ paddingBottom: '95px' }}>
                    <HeaderWave color="#e8efff"/>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 className="h1-font component-heading">Profile</h1>
                        <img src={editIcon} className="edit-icon" />
                    </div>
                    <Grid container>
                        <Grid item xs={4}>
                            <img src={profilePhoto} />
                        </Grid>
                        <Grid item xs={8} style={{ margin: '30px 0px' }}>
                            <span className="strong-medium-font" style={{ color: '#345095' }}>Jessie Roberts</span><br />
                            <span className="medium-font" style={{ color: '#7e8494' }}>1458 files · 25 folders</span>
                        </Grid>
                    </Grid>
                    <div className="inner-div">
                        <p style={{ margin: '5px' }} className="strong-medium-font"><span className="storage-text" style={{color: '#3c64c7'}}>32,5 GB</span> of 100 GB Free</p>
                        <LinearProgress variant="determinate" value={68} />
                        <div className="border-div">
                            Increase storage space
                        </div>
                        <div>
                            <div className="profile-function-div">
                                <p className="medium-font">Storage Management</p>
                                <img src={rightArrow} className="arrow-icon" onClick={() => {browserRedirect('profile/storageManagement')}}/>
                            </div>
                            <div className="profile-function-div" style={{padding: '20px 15px 20px 20px'}}>
                                <div>
                                    <span className="medium-font">Storage Management</span><br />
                                    <span className="small-font">iPhone, Macbook, iPad</span>
                                </div>
                                <img src={rightArrow} className="arrow-icon"/>
                            </div>
                            <div className="profile-function-div">
                                <p className="medium-font">Camera uploads</p>
                                <AntSwitch checked={state.camera_uploads} onChange={handleChange} name="camera_uploads"  className="arrow-icon"/>
                            </div>
                            <div className="profile-function-div">
                                <p className="medium-font">Use data for file transfer</p>
                                <AntSwitch checked={state.data_for_file_transfer} onChange={handleChange} name="data_for_file_transfer"  className="arrow-icon"/>
                            </div>
                        </div>
                    </div>
            </div>
            <BottomDrawer />
        </MobileView>
    );
}