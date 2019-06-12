import axios from 'axios';
import config from '../config';
import { getAccessToken } from '../auth/auth-service';

export default {
  addReview(payload) {
    const endpoint = config.api;
    const token = getAccessToken();

    return new Promise((resolve, reject) => {
      axios.post(`${endpoint}reviews`, payload, {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      });
    });
  },
  getReviews() {
    const endpoint = config.api;
    const token = getAccessToken();

    return new Promise((resolve, reject) => {
      axios.get(`${endpoint}reviews`, {
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        resolve(response.data);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
