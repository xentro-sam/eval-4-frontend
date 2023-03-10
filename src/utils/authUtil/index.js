import axios from 'axios';
import {AUTH_URL} from '../../constants/apiEndPoints';

const authRequest = async (apiEndPoint, dynamicConfig = {}) => {
  const requestDetails = {
    baseURL: `${AUTH_URL}${apiEndPoint.url}`,
    method: apiEndPoint.method,
    ...dynamicConfig,
  };
  const {data} = await axios(requestDetails);
  return data;
};

export default authRequest;
