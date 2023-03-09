import * as React from 'react';
import './ContentTypeContainer.css';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPES} from '../../constants/apiEndPoints';

export default function ContentTypeContainer() {
  const [contentTypes, setContentTypes] = React.useState([]);
  React.useEffect(() => {
    makeRequest(GET_CONTENT_TYPES, {})
        .then((response) => {
          setContentTypes(response);
        });
  }, []);
  return (
    <div id="content-type-container">
      <div id="content-type-container-search">

      </div>
      <div id="content-type-container-content">
        <div id="add-content-type-button">
            + New Type
        </div>
        <div id="content-type-container-content-list">
          {contentTypes.map((contentType) => {
            return (
              <div className="content-type-container-content-list-item" key={contentType.id}>
                {contentType.contentTypeName}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
