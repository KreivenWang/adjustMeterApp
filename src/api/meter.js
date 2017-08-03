import axios from 'axios';
import { getPlatUrl } from './platUrl';

export function getAllMeters() {

  const url = `${getPlatUrl()}/user/dologin`;
  // const params = Object.assign({}, {
  //   username,
  //   password
  // });
  return axios.get(url)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(err => {
      console.log('post /user/dologin failed: ' + err);
      Promise.reject();
    });
}