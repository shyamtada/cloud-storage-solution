/**
 * LocalStorage screen
 *
 * shows the content of local storage
 */

import React, { useState, useEffect } from 'react';
import { MobileView } from 'react-device-detect';
import styled from 'styled-components';
import { Grid, IconButton } from "@material-ui/core";
import Sheet from 'react-modal-sheet';

import SearchBar from '../../components/SearchBar';
import BottomDrawer from '../../components/BottomDrawer';
import HeaderWave from '../../components/HeaderWave';
import { browserRedirect } from '../../helpers/helpers';

const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    height: 230px !important;
    -webkit-border-top-right-radius: 112px 200px !important;
    -webkit-border-top-left-radius: 112px 200px !important;
  }
  .react-modal-sheet-header {
    display: none !important;
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    padding: 10px 45px;
  }
`;



import './localStorage.css';
const videoIcon = require('../../images/video_icon.png');
const imageIcon = require('../../images/photo_icon.png');
const musicIcon = require('../../images/music_icon.png');
const archiveIcon = require('../../images/archive_icon.png');
const moreicon = require('../../images/more_icon.png');
const scanIcon = require('../../images/scan_icon.png');
const cameraIcon = require('../../images/camera_icon.png');
const uploadIcon = require('../../images/upload_icon.png');
const closeIcon = require('../../images/close_icon.png');

const files = [
    {
        icon: musicIcon,
        name: 'Franky Wah - Aftertime',
        type: 'mp3',
        size: '9.2 mb'
    },
    {
        icon: imageIcon,
        name: "Annie's new car",
        type: 'jpg',
        size: '4.8 mb'
    },
    {
        icon: archiveIcon,
        name: "Top secret archive",
        type: "zip",
        size: '3.7 gb'
    },
    {
        icon: archiveIcon,
        name: "On the top of the world",
        type: "doc",
        size: '2.3 mb'
    },
    {
        icon: videoIcon,
        name: "Fun Time",
        type: "mp4",
        size: '321 mb'
    },

]

export default function LocalStorage({ addFiles }) {
    const [isOpen, setOpen] = React.useState(addFiles);

    useEffect(() => {
        if(addFiles){
            setOpen(addFiles);
        }
    },[addFiles])

    const handleClose = () => {
        setOpen(false);
        browserRedirect('/localStorage');
    }   

    return (
        <MobileView style={{ height: '100vh' }}>
            <div className="outer-div">
                <HeaderWave color="#e8efff"/>
                <h1 className="h1-font component-heading">Local Storage</h1>
                <div style={{ padding: '0px 25px' }}>
                    <SearchBar />
                </div>
                <div className="storage-option">
                    <div className="option-div">
                        <img src={videoIcon} height={75} />
                        <p>Video</p>
                    </div>
                    <div className="option-div">
                        <img src={imageIcon} height={75} />
                        <p>Image</p>
                    </div>
                    <div className="option-div">
                        <img src={musicIcon} height={75} />
                        <p>Music</p>
                    </div>
                    <div className="option-div">
                        <img src={archiveIcon} height={75} />
                        <p>Archive</p>
                    </div>
                </div>
                <div>
                    {
                        files.map((file, index) => {
                            return (
                                <Grid container key={index} style={{ margin: '15px 0px' }}>
                                    <Grid item xs={3} style={{ textAlign: 'center' }}>
                                        <img src={file.icon} height={52} />
                                    </Grid>
                                    <Grid item xs={8} style={{ margin: 'auto' }}>
                                        <span className="medium-font">{file.name}</span><br />
                                        <span className="small-font">{file.type} · {file.size}</span>
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
                        })
                    }
                </div>
            </div>
            <CustomSheet isOpen={isOpen} onClose={() => setOpen(false)} disableDrag={true}>
                <CustomSheet.Container>
                    <CustomSheet.Header />
                    <CustomSheet.Content>
                        <Grid container style={{paddingTop: '12px'}}>
                            <Grid item xs={4} style={{paddingTop: '35px'}} className='add-file-div'>
                                <img src={scanIcon} />
                                <p>Scan</p>
                            </Grid>
                            <Grid item xs={4} className='add-file-div'>
                                <img src={cameraIcon} />
                                <p>Photo</p>
                            </Grid>
                            <Grid item xs={4} style={{paddingTop: '35px'}} className='add-file-div'>
                                <img src={uploadIcon}/>
                                <p>Upload</p>
                            </Grid>
                        </Grid>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <img src={closeIcon} onClick={handleClose}/>
                        </div>    
                    </CustomSheet.Content>
                </CustomSheet.Container>
                <CustomSheet.Backdrop />
            </CustomSheet>
            {
                !addFiles ? <BottomDrawer /> : null
            }
        </MobileView>
    );
}