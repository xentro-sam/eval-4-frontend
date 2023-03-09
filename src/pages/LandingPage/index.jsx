import * as React from 'react';
import {CollectionSidebar, Header, ContentTypeContainer} from '../../components';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div id="landing-page">
      <div id='sidebar'>
        <CollectionSidebar />
      </div>
      <div id="main">
        <div id="header">
          <Header />
        </div>
        <div id="landing-content">
          <div id="container-1">
            <ContentTypeContainer />
          </div>
          <div id="container-2">
          </div>
        </div>
      </div>
    </div>
  );
}
