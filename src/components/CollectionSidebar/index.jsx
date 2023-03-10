import * as React from 'react';
import './CollectionSidebar.css';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router';
import {CONTENT_TYPE_BUILDER, CONTENT_TYPE} from '../../constants/routes';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPES} from '../../constants/apiEndPoints';

export default function CollectionSidebar(props) {
  const [collectionTypes, setCollectionTypes] = React.useState([]);
  const navigate = useNavigate();
  const navigateToContentBuilder = () => {
    navigate(CONTENT_TYPE_BUILDER);
  };
  const navigateToContentType = (id) => {
    const url = CONTENT_TYPE.replace(':contentTypeId', id);
    navigate(url);
  };
  React.useEffect(() => {
    makeRequest(GET_CONTENT_TYPES, {})
        .then((response) => {
          setCollectionTypes(response);
        });
  }, []);
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
              {collectionTypes.map((collectionType) => {
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
