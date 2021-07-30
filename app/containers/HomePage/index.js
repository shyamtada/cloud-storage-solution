/**
 * Home Page
 *
 * This is the home page for the cloud storage solution
 */

import React, { useState } from 'react';
import { MobileView } from 'react-device-detect';
import { Grid as SGrid } from "semantic-ui-react";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Grid, IconButton } from "@material-ui/core";

import BottomDrawer from '../../components/BottomDrawer';
import SearchBar from '../../components/SearchBar';
import HeaderWave from '../../components/HeaderWave';

import './homePage.css';

const upArrow = require('../../images/upArrow.png');
const moreicon = require('../../images/more_icon.png');

const folder_data = [
    {
        id: '1',
        title: 'The next big thing',
        file_count: '12',
        file_size: '2.1 gb',
        file_imgs: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
        ],
        additional_files: 7
    },
    {
        id: '2',
        title: 'Top Secret',
        file_count: '7',
        file_size: '523 mb',
        file_imgs: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80",
            "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        ],
        additional_files: 2
    },
    {
        id: '3',
        title: 'Freebie project',
        file_count: '3',
        file_size: '192 mb',
        file_imgs: [
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        ],
    },
    {
        id: '4',
        title: 'London Meetup',
        file_count: '453',
        file_size: '1.7 gb',
        file_imgs: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
            "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80",
            "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        ],
        additional_files: 3
    },
]



export default function HomePage() {

    const [view, selectView] = useState('Folder');
    const [filteredDataField, setFilteredDataField] = useState('');

    const handleChange = (title) => {
        setFilteredDataField(title);
    }

    const lowercasedFilterDataField = filteredDataField.toLowerCase();
    let filteredDataFields = folder_data.filter(item => {
        return Object.keys(item).some(title =>
            item['title'].toLowerCase().includes(lowercasedFilterDataField)
        );
    });

    const Folders = () => {
        return (
            <Grid container style={{ margin: '25px 0px' }}>
                {
                    filteredDataFields.map((data, index) => {
                        return (
                            <Grid item xs={6} style={{ padding: '10px', height: '150px' }} key={data.id}>
                                <div className="folder-div">
                                    <div className="folder-heading">
                                        <span className="medium-font">{data.title}</span>
                                        <div>
                                            <IconButton
                                                aria-label="more"
                                                aria-controls="long-menu"
                                                aria-haspopup="true"
                                                style={{ padding: "0 12px" }}
                                            >
                                                <img src={moreicon} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'left', marginTop: '5px' }} className="small-font">
                                        {data.file_count} f · {data.file_size}
                                    </div>
                                    <div className="folder-image-div">
                                        {
                                            data.file_imgs.map((img, i) => {
                                                return(
                                                    <img src={img} height={30} width={30} style={i > 0 ? { marginLeft: '-10px' } : null} className="file-image" key={i}/>
                                                )
                                            })
                                        }
                                        {data.additional_files ? <div className="file-image file-count">+{data.additional_files}</div> : null}
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }

    const Files = () => {
        return (
            <div className="files-div">
                No Files To Show
            </div>
        )
    }

    return (
        <MobileView style={{ height: '100vh' }}>
            <div className="home-page-div">
                <SGrid.Column className="image-container">
                    <HeaderWave color="#89aafa" />
                    <div style={{ margin: '0px 30px' }}>
                        <h2 className="h1-font" style={{ marginBottom: '0px' }}>Hello Jessie,</h2>
                        <p className="supporting-text" style={{ marginTop: '5px' }}>at the moment you have</p>
                        <div style={{width: '100%'}}>
                            <div className="storage-info-div">
                                <p style={{ margin: '5px' }} className="strong-medium-font"><span className="storage-text">32,5 GB</span> of 100 GB Free</p>
                                <div>
                                    <img src={upArrow} />
                                </div>
                            </div>
                            <LinearProgress variant="determinate" value={68} />
                        </div>
                    </div>
                </SGrid.Column>
                <div className="container home-page-container">
                    <SearchBar handleChange={handleChange}/>
                    <Grid container style={{ borderBottom: '1px solid #d3d7e0' }}>
                        <Grid item xs={6} style={{ padding: '25px 0px 16px 0px' }} className={`tab-switch ${view == 'Files' ? 'tab-selected' : ""}`} onClick={() => { selectView('Files') }}>
                            FILES
                        </Grid>
                        <Grid item xs={6} style={{ padding: '25px 0px 16px 0px' }} className={`tab-switch ${view == 'Folder' ? 'tab-selected' : ""}`} onClick={() => { selectView('Folder') }}>
                            FOLDER
                        </Grid>
                    </Grid>
                    {
                        view == 'Folder' ?
                            <Folders />
                            :
                            <Files />
                    }
                </div>
            </div>
            <BottomDrawer />
        </MobileView>
    );
}