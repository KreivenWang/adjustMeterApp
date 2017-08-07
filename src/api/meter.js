import axios from 'axios';
import { getPlatUrl } from './platUrl';

export function getAllMeters(userId) {
  const action = '/mobileApp/getAllMeters';
  const url = `${getPlatUrl()}${action}?userId=${userId}`;
  return axios.get(url)
    .then(response => {
      return Promise.resolve(response.data);
    })
    .catch(err => {
      console.log(`post ${action} failed: ` + err);
      Promise.reject();
    });
}