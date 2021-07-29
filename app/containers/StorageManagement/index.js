/**
 * Profile screen
 *
 * This screen shows the user profile
 */

import React, { useState } from 'react';
import { MobileView } from 'react-device-detect';
import { Grid, IconButton } from "@material-ui/core";
import { Doughnut} from "react-chartjs-2";

import BottomDrawer from '../../components/BottomDrawer';
import HeaderWave from '../../components/HeaderWave';
import { browserRedirect } from '../../helpers/helpers';

const leftArrow = require("../../images/left_arrow.png");
const videoIcon = require('../../images/video_icon.png');
const imageIcon = require('../../images/photo_icon.png');
const archiveIcon = require('../../images/archive_icon.png');
const moreicon = require('../../images/more_icon.png');

import './storageManagement.css';

const options = {
    percentageInnerCutout: 50,
    rotation: Math.PI * 0.5,
    events: [],
    legend: {
        display: false,
    },
    elements: {
        arc: {
            borderWidth: 20,
            hoverBorderColor: '#ffffff',
        }
    }
};


const data = {
    rotation: Math.PI * 0.5,
    datasets: [
        {
            data: [10, 20, 15, 20, 15, 20],
            backgroundColor: ['rgb(255, 193, 7, 0.5)', 'rgb(74, 195, 103,0.5)', 'rgb(141, 110, 99, 0.5)', 'rgb(0, 188, 212, 0.2)', 'rgb(218, 93, 245, 0.5)', 'rgb(33, 150, 243, 0.5)'],
        }
    ]
};

const files = [
    {
        icon: videoIcon,
        name: 'TikTok dance',
        type: 'mov',
        used: '1 times'
    },
    {
        icon: imageIcon,
        name: "Selfie withhout beard",
        type: 'jpg',
        used: '2 times'
    },
    {
        icon: archiveIcon,
        name: "University lectures",
        type: "zip",
        used: '4 times'
    },

]



export default function StorageManagement() {

    const Files = () => {
        const [view, selectView] = useState('LEAST USED');

        return (
        <div>
            <Grid container style={{ borderBottom: '1px solid #d3d7e0' }}>
                <Grid item xs={4} style={{ padding: '25px 0px 10px 0px' }} className={`tab-switch ${view == 'LEAST USED' ? 'tab-selected' : ""}`} onClick={() => { selectView('LEAST USED') }}>
                    LEAST USED
                </Grid>
                <Grid item xs={4} style={{ padding: '25px 0px 10px 0px' }} className={`tab-switch ${view == 'LARGEST' ? 'tab-selected' : ""}`} onClick={() => { selectView('LARGEST') }}>
                    LARGEST
                </Grid>
                <Grid item xs={4} style={{ padding: '25px 0px 10px 0px' }} className={`tab-switch ${view == 'LEAST ACCESSED' ? 'tab-selected' : ""}`} onClick={() => { selectView('LEAST ACCESSED') }}>
                    LEAST ACCESSED
                </Grid>
            </Grid>
            {
                view == "LEAST USED" ? 
                    files.map((file, index) => {
                        return (
                            <Grid container key={index} style={{ margin: '15px 0px' }}>
                                <Grid item xs={3} style={{ textAlign: 'center' }}>
                                    <img src={file.icon} height={52} />
                                </Grid>
                                <Grid item xs={8} style={{ margin: 'auto' }}>
                                    <span className="medium-font">{file.name}</span><br />
                                    <span className="small-font">{file.type} · {file.used}</span>
                                </Grid>
                                <Grid item xs={1} style={{ margin: 'auto' }}>
                                    <IconButton
                                        aria-label="more"
                                        aria-controls="long-menu"
                                        aria-haspopup="true"
                                        style={{ padding: "0 12px" }}
                                    >
                                        <img src={moreicon} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        )
                    }) :
                    <div className="files-div">
                        No Files To Show
                    </div>
            }
        </div>
        )
    }

    return (
        <MobileView style={{ height: '100vh' }}>
            <div className="outer-div" style={{ paddingBottom: '95px' }}>
                <HeaderWave color="#e8efff"/>
                <Grid container>
                    <Grid item xs={2} style={{ margin: 'auto', paddingLeft: '25px' }}>
                        <img src={leftArrow} onClick={() => { browserRedirect('/profile') }} />
                    </Grid>
                    <Grid item xs={8} style={{ textAlign: 'center' }}>
                        <h2 className="strong-medium-font" style={{ color: '#345095' }}>Storage Management</h2>
                    </Grid>
                    <Grid item xs={2} />
                </Grid>
                <div style={{ width: '100%' }}>
                    <div style={{ width: '261px', height: '261px', margin: 'auto', position: 'relative' }}>
                        <Doughnut data={data} options={options} />
                        <span className="donut-storage-amt supporting-text" style={{ color: '#345095' }}>67.5 GB</span>
                    </div>
                </div>
                <div className="storage-option">
                    <div className="option-div">
                        <div className="file-color-div" style={{ backgroundColor: '#2196f3' }} />
                        <p className="file-type-font">Music</p>
                    </div>
                    <div className="option-div">
                        <div className="file-color-div" style={{ backgroundColor: '#ffc107' }} />
                        <p className="file-type-font">Image</p>
                    </div>
                    <div className="option-div">
                        <div className="file-color-div" style={{ backgroundColor: '#4ac367' }} />
                        <p className="file-type-font">Archive</p>
                    </div>
                    <div className="option-div">
                        <div className="file-color-div" style={{ backgroundColor: '#8d6e63' }} />
                        <p className="file-type-font">Documents</p>
                    </div>
                    <div className="option-div">
                        <div className="file-color-div" style={{ backgroundColor: '#00bcd4' }} />
                        <p className="file-type-font">Video</p>
                    </div>
                </div>
                <Files />
            </div>
            <BottomDrawer />
        </MobileView>
    );
}