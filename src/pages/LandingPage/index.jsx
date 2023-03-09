import * as React from 'react';
import {CollectionSidebar, Header, ContentTypeContainer, FieldsContainer} from '../../components';
import './LandingPage.css';

export default function LandingPage() {
  const [fields, setFields] = React.useState([]);
  const [containerTitle, setContainerTitle] = React.useState('');
  const [collectionTypes, setCollectionTypes] = React.useState([]);
  return (
    <div id="landing-page">
      <div id='sidebar'>
        <CollectionSidebar collectionTypes={collectionTypes} />
      </div>
      <div id="main">
        <div id="header">
          <Header />
        </div>
        <div id="landing-content">
          <div id="container-1">
            <ContentTypeContainer setFields={setFields} setContainerTitle={setContainerTitle} setCollectionTypes={setCollectionTypes} />
          </div>
          <div id="container-2">
            <FieldsContainer title={containerTitle} fields={fields} setContainerTitle={setContainerTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
