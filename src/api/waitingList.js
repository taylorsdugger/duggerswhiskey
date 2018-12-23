import axios from 'axios';
import config from '../config';
import { getAccessToken } from '../auth/auth-service';

export default {
    joinWaitingList() {
        const endpoint = config.api;
        const token = getAccessToken();

        return new Promise((resolve, reject) => {
            axios.post(`${endpoint}joinWaitingList`, {
                headers: {
                    headers: {
                        'content-type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            }).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
