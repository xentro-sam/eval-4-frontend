import * as React from 'react';
import './CollectionSidebar.css';
import PropTypes from 'prop-types';

export default function CollectionSidebar(props) {
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
                  <li key={collectionType.id} id="collection-type-item">{collectionType.contentTypeName}</li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div id="content-type-builder">
            Content Type Builder
      </div>
    </div>
  );
}

CollectionSidebar.propTypes = {
  collectionTypes: PropTypes.array,
};
