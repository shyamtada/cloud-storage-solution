/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React, { useEffect } from "react";
 import { Helmet } from "react-helmet";
 import styled from "styled-components";
 import { Switch, Route } from "react-router-dom";

 import OnboardScreen from "../OnboardScreen";
 import NotFoundPage from "../NotFoundPage";
 import HomePage from "../HomePage";
 import LocalStorage from "../LocalStorage";
 import Notification from "../Notification";
 import Profile from "../Profile";
 import StorageManagement from "../StorageManagement";
 
 const AppWrapper = styled.div`
   max-width: 100%;
   display: flex;
   min-height: 100%;
   flex-direction: column;
 `;
 
 export default function App() {
 
     return (
         <AppWrapper>
             <Helmet titleTemplate="%s - CloudStorage" defaultTitle="CloudStorage">
                 <meta name="description" content="CloudStorage" />
             </Helmet>
             <Switch>
                 <Route exact path="/" component={OnboardScreen} />
                 <Route exact path="/homePage" component={HomePage} />
                 <Route exact path="/localStorage" component={LocalStorage} />
                 <Route exact path="/localStorage/addFile" render={(props) => <LocalStorage {...props} addFiles={true} />} />
                 <Route exact path="/notification" component={Notification} />
                 <Route exact path="/profile" component={Profile} />
                 <Route exact path="/profile/storageManagement" component={StorageManagement} />
                 <Route path="" component={NotFoundPage} />
             </Switch>
         </AppWrapper>
     );
 }