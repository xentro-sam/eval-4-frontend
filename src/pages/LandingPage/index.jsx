import * as React from 'react';
import {CollectionSidebar, Header, ContentTypeContainer, FieldsContainer} from '../../components';
import './LandingPage.css';

export default function LandingPage() {
  const [fields, setFields] = React.useState([]);
  const [containerTitle, setContainerTitle] = React.useState('');
  const [collectionTypes, setCollectionTypes] = React.useState([]);
  const [contentTypeId, setContentTypeId] = React.useState(0);
  return (
    <div id="landing-page">
      <div id='sidebar'>
        <CollectionSidebar collectionTypes={collectionTypes} />
      </div>
      <div id="main">
        <div id="header">
          <Header title="Content Types" />
        </div>
        <div id="landing-content">
          <div id="container-1">
            <ContentTypeContainer setFields={setFields} setContainerTitle={setContainerTitle} setCollectionTypes={setCollectionTypes} setContentTypeId={setContentTypeId} />
          </div>
          <div id="container-2">
            {contentTypeId !== 0 &&<FieldsContainer title={containerTitle} fields={fields} setContainerTitle={setContainerTitle} contentTypeId={contentTypeId} setFields={setFields} />}
          </div>
        </div>
      </div>
    </div>
  );
}
