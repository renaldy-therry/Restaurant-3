/* eslint-disable no-unused-vars */
import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.URL_BASIS}list`,
  DETAIL: (id) => `${CONFIG.URL_BASIS}detail/${id}`,
};

export default API_ENDPOINT;
