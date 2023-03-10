import * as React from 'react';
import './ContentType.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPE_FIELDS as getContentTypeFields} from '../../constants/apiEndPoints';

export default function ContentType(props) {
  const [fields, setFields] = React.useState([]);
  React.useEffect(() => {
    makeRequest(getContentTypeFields(props.id), {})
        .then((response) => {
          setFields(response);
        });
  }, []);
  const handleClick = () => {
    props.setFields(fields);
    props.setContainerTitle(props.contentTypeName);
    props.setContentTypeId(props.id);
  };

  return (
    <div id="content-type" onClick={handleClick}>
      <div id="content-type-name">{props.contentTypeName}</div>
      <div id="content-type-count">{fields.length}</div>

    </div>
  );
}

ContentType.propTypes = {
  contentTypeName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setFields: PropTypes.func.isRequired,
  setContainerTitle: PropTypes.func.isRequired,
  setContentTypeId: PropTypes.func.isRequired,
};
