import * as React from 'react';
import {CollectionSidebar, Header, ContentTypeContainer, FieldsContainer} from '../../components';
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
            <FieldsContainer title="Fields" fields={['Field 1', 'Field 2', 'Field 3']} />
          </div>
        </div>
      </div>
    </div>
  );
}
