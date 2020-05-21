import { get } from 'lodash';

const getDataList = (res) => {
  const data = getData(res);

  return Array.isArray(data) ? data : [];
};

const getData = (res) => {
  return get(res, 'data', null);
};

const getErrorData = (err) => {
  return get(err, 'response.data', null);
};

const throwErrorData = (err) => {
  const errData = getErrorData(err);

  throw errData;
};

export default {
  getDataList,
  getData,
  getErrorData,
  throwErrorData,
};
