import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, NavLink } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';


import "./bottomDrawer.css";

const cloudIcon = require('../../images/cloud_icon.png');
const cloudSelected = require('../../images/cloud_selected.png');
const checkIcon = require('../../images/checked_icon.png');
const selectedCheckIcon = require('../../images/selected_checked_icon.png');
const addIcon = require('../../images/add_icon.png');
const bellicon = require('../../images/bell_icon.png');
const bellselecticon = require('../../images/selected_bell_icon.png');
const profileicon = require('../../images/profile_icon.png');
const profileselecticon = require('../../images/selected_profile_icon.png');

function BottomDrawer() {
  // console.log("Bottom navigation", props);

  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="bottom-drawer"
    >
      <BottomNavigationAction  value="0" component={Link} to={'/homePage'} icon={ window.location.pathname === "/homePage" ? <img src={cloudSelected} /> : <img src={cloudIcon} />} />
      <BottomNavigationAction  value="1" component={Link} to={'/localStorage'} icon={ window.location.pathname === "/localStorage" ? <img src={selectedCheckIcon} /> : <img src={checkIcon} />} />
      <BottomNavigationAction  value="2" component={Link} to={'/localStorage/addFile'} icon={<img src={addIcon} />} />
      <BottomNavigationAction  value="3" component={Link} to={'/notification'} icon={ window.location.pathname === "/notification" ? <img src={bellselecticon}/> : <img src={bellicon} />} />
      <BottomNavigationAction  value="4" component={Link} to={'/profile'} icon={ window.location.pathname === "/profile" || window.location.pathname === "/profile/storageManagement" ? <img src={profileselecticon} /> : <img src={profileicon} />} />
    </BottomNavigation >
  );
}

export default BottomDrawer;
