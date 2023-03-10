export const BACKEND_URL = 'http://localhost:8000';
export const AUTH_URL = 'http://localhost:4000';

export const LOGIN = {
  url: '/login',
  method: 'post',
};

export const REGISTER = {
  url: '/user',
  method: 'post',
};

export const VALIDATE_TOKEN = {
  url: '/token/validate',
  method: 'post',
};

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

export const DELETE_CONTENT_TYPE_ENTRY = (id, entryId) => ({
  url: `/contentTypes/${id}/${entryId}`,
  method: 'delete',
});
