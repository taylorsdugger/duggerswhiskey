import axios from 'axios';
import config from '../config';
import { getAccessToken, getUserProfile } from '../auth/auth-service';

const a = axios.create({
    baseURL: config.api,
    headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${getAccessToken()}`
    }
});

const api = {
    joinList: () => {
        return new Promise((resolve, reject) => {
            // getUserProfile().then((profile) => {
            //     a.get(`/briefings/${feedName}`).then((res) => {
            //         resolve(res.data);
            //     });
            // });
            resolve('200');
        });
    }
};
export default api;