/**
 * Onboard screen
 *
 * This is the first page that opens
 */

import React from 'react';
import { MobileView } from 'react-device-detect';
import { browserRedirect } from '../../helpers/helpers';

import './onboardScreen.css';

const onboardBackground = require('../../images/illustration.png');
const nextArrow = require('../../images/nextArrow.png');


export default function OnboardScreen() {
    return (
        <MobileView style={{ height: '100vh' }}>
            <div style={{ background: `url("${onboardBackground}")` }} className="bg-img">
                <div className="info-text">
                    Your cloud storage safe and sound
                </div>
                <img src={nextArrow} className="next-arrow-img" onClick={() => browserRedirect('/homePage')} />
            </div>
        </MobileView>
    );
}