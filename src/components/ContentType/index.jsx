import * as React from 'react';
import './ContentType.css';
import PropTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import {GET_CONTENT_TYPE_ENTRY as getContentTypeEntry} from '../../constants/apiEndPoints';

export default function ContentType(props) {
  const [fieldCount, setFieldCount] = React.useState(0);
  const [fields, setFields] = React.useState([]);
  React.useEffect(() => {
    makeRequest(getContentTypeEntry(props.id), {})
        .then((response) => {
          if (response.length === 0) return;
          let recievedFields = Object.keys(response[0]);
          recievedFields = recievedFields.filter((field) => {
            return field !== 'id' && field !== 'createdAt' && field !== 'updatedAt';
          });
          setFields(recievedFields);
          setFieldCount(recievedFields.length);
        });
  }, []);
  const handleClick = () => {
    props.setFields(fields);
    props.setContainerTitle(props.contentTypeName);
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
};
