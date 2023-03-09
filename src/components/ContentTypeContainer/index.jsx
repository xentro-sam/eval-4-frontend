import * as React from 'react';
import './ContentTypeContainer.css';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPES} from '../../constants/apiEndPoints';
import ContentType from '../ContentType';
import PropTypes from 'prop-types';
import NewContentTypeModal from '../NewContentTypeModal';

export default function ContentTypeContainer(props) {
  const [contentTypes, setContentTypes] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    makeRequest(GET_CONTENT_TYPES, {})
        .then((response) => {
          setContentTypes(response);
          props.setCollectionTypes(response);
        });
  }, []);
  return (
    <div id="content-type-container">
      <div id="content-type-container-search">

      </div>
      <div id="content-type-container-content">
        <div id="add-content-type-button" onClick={() => setShowModal(true)}>
            + New Type
        </div>
        <NewContentTypeModal show={showModal} onClose={() => setShowModal(false)} setContentTypes={setContentTypes} setCollectionTypes={props.setCollectionTypes} />
        <div id="content-type-container-content-list">
          {contentTypes.map((contentType) => {
            return (
              <ContentType key={contentType.id} {...contentType} setFields={props.setFields} setContainerTitle={props.setContainerTitle} setContentTypeId={props.setContentTypeId} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

ContentTypeContainer.propTypes = {
  setFields: PropTypes.func.isRequired,
  setContainerTitle: PropTypes.func.isRequired,
  setCollectionTypes: PropTypes.func.isRequired,
  setContentTypeId: PropTypes.func.isRequired,
};
