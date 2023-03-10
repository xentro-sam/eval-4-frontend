import * as React from 'react';
import './CollectionSidebar.css';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router';
import {CONTENT_TYPE_BUILDER, CONTENT_TYPE} from '../../constants/routes';

export default function CollectionSidebar(props) {
  const navigate = useNavigate();
  const navigateToContentBuilder = () => {
    navigate(CONTENT_TYPE_BUILDER);
  };
  const navigateToContentType = (id) => {
    const url = CONTENT_TYPE.replace(':contentTypeId', id);
    navigate(url);
  };
  return (
    <div id="collection-sidebar">
      <div id="sidebar-header">
            CMS+
      </div>
      <div id="sidebar-content">
        <div id="collection-types">
          <div id="collection-types-header">
            Collection Types
          </div>
          <div id="collection-types-content">
            <ul>
              {props.collectionTypes.map((collectionType) => {
                return (
                  <li key={collectionType.id} id="collection-type-item" onClick={() => navigateToContentType(collectionType.id)}>{collectionType.contentTypeName}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div id="content-type-builder" onClick={navigateToContentBuilder}>
            Content Type Builder
      </div>
    </div>
  );
}

CollectionSidebar.propTypes = {
  collectionTypes: PropTypes.array,
};
