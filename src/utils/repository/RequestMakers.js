import axios from 'axios';
import {Endpoints} from './Endpoints';

const api = Endpoints.api;

export function GetMaker(path) {
  const fullpath = api + path;
  console.log(fullpath);
  return axios
    .get(fullpath)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response);
        return err.response;
      }
    });
}

export function PostMaker(data, path) {
  console.log(api + path);
  return axios
    .post(api + path, data)
    .then(res => {
      if (res.status === 200) {
        return res;
      } else {
        return res;
      }
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response);
        return err.response.data;
      }
    });
}
