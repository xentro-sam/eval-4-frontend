import * as React from 'react';
import {CollectionSidebar} from '../../components';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div id="landing-page">
      <div id='sidebar'>
        <CollectionSidebar />
      </div>
      <div id='main'>
        <h1>Landing Page</h1>
      </div>
    </div>
  );
}
