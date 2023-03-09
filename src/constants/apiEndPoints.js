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

export const GET_CONTENT_TYPE_FIELDS = (id) => ({
  url: `/contentTypes/${id}/fields`,
  method: 'get',
});

export const UPDATE_CONTENT_TYPE = (id) => ({
  url: `/contentTypes/${id}`,
  method: 'put',
});
