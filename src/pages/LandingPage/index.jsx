import * as React from 'react';
import {CollectionSidebar, Header} from '../../components';
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
      </div>
    </div>
  );
}
