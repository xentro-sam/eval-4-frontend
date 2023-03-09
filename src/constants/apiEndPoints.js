export const BACKEND_URL = 'http://localhost:8000';

export const GET_CONTENT_TYPES = {
  url: '/contentTypes',
  method: 'get',
};

export const GET_CONTENT_TYPE_ENTRY = (id) => ({
  url: `/contentTypes/${id}`,
  method: 'get',
});

export const CREATE_CONTENT_TYPE = {
  url: '/contentTypes',
  method: 'post',
};
