import * as React from 'react';
import './ContentTypePage.css';
import {CollectionSidebar, Header, Entries} from '../../components';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPES,
  GET_CONTENT_TYPE_ENTRY as getContentTypeEntry,
  GET_CONTENT_TYPE_FIELDS as getContentTypeFields,
} from '../../constants/apiEndPoints';
import {useParams} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

export default function ContentTypePage() {
  const {contentTypeId} = useParams();
  const [collectionTypes, setCollectionTypes] = React.useState([]);
  const [entries, setEntries] = React.useState([]);
  const [attributes, setAttributes] = React.useState(['id']);
  React.useEffect(() => {
    makeRequest(GET_CONTENT_TYPES, {})
        .then((response) => {
          setCollectionTypes(response);
        });
    makeRequest(getContentTypeEntry(contentTypeId), {})
        .then((response) => {
          setEntries(response);
        });
    makeRequest(getContentTypeFields(contentTypeId), {})
        .then((response) => {
          setAttributes([...attributes, ...response]);
        });
  }, []);
  const removeEntry = (id) => {
    const newEntries = entries.filter((entry) => entry.id !== id);
    setEntries(newEntries);
  };
  const reqAttributes = attributes.slice(0, Math.min(5, attributes.length));
  return (
    <div id="content-type-page">
      <div id='sidebar'>
        <CollectionSidebar collectionTypes={collectionTypes} />
      </div>
      <div id="content-type-main">
        <div id="content-type-header">
          <Header />
        </div>
        <div id="content-type-content">
          <div id="entries-count">
            {entries.length} Entries Found
          </div>
          <div id="content-type-attributes">
            {reqAttributes.map((attribute) => {
              return (
                <div id="attribute" key={uuidv4()}>
                  {attribute}
                </div>
              );
            })}
            <div id="attribute" key={uuidv4()}>
                Actions
            </div>
          </div>
          <div id="content-type-entries">
            {
              entries.map((entry) => {
                return (
                  <Entries key={uuidv4()} {...entry} reqAttributes={reqAttributes} contentTypeId={Number(contentTypeId)} removeEntry={removeEntry} />
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
