/**
 * Notification screen
 *
 * This screen shows the notifiaction
 */

import React from 'react';
import { MobileView } from 'react-device-detect';

import BottomDrawer from '../../components/BottomDrawer';
import HeaderWave from '../../components/HeaderWave';


import './notification.css';
const notificationImage = require('../../images/notification_img.png');


export default function Notification() {

    return (
        <MobileView style={{ height: '100vh' }}>
            <div className="outer-div" style={{ paddingBottom: '95px' }}>
                <HeaderWave color="#e8efff" />
                <h1 className="h1-font component-heading">Notifications</h1>
                <div style={{ textAlign: 'center', marginTop: '25%' }}>
                    <img src={notificationImage} />
                </div>
                <div className="notification-message-header">
                    No notifcations yet
                </div>
                <div className="notification-message">
                    Here you will see the external changes in your shared folders, tags from your peers and other updates
                </div>
            </div>
            <BottomDrawer />
        </MobileView>
    );
}