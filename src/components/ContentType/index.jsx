import * as React from 'react';
import './ContentType.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPE_FIELDS as getContentTypeFields} from '../../constants/apiEndPoints';

export default function ContentType(props) {
  const [fieldCount, setFieldCount] = React.useState(0);
  const [fields, setFields] = React.useState([]);
  React.useEffect(() => {
    makeRequest(getContentTypeFields(props.id), {})
        .then((response) => {
          setFields(response);
          setFieldCount(response.length);
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
      <div id="content-type-count">{fieldCount}</div>

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
