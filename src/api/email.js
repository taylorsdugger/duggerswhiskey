import axios from 'axios';
import config from '../config';
import { getAccessToken } from '../auth/auth-service';

export default {
    sendEmail(content) {
        const endpoint = config.api;
        const token = getAccessToken();
        const payload = {
            email: content.email,
            subject: content.subject,
            message: content.message,
            given_name: content.given_name,
            family_name: content.family_name
        }

        return new Promise((resolve, reject) => {
            axios.post(`${endpoint}sendEmailToOwner`, payload, {
                headers: {
                    'content-type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }).then(response => {
                resolve(response);
            }).catch(err => {
                reject(err, 'Error sending email');
            });
        });
    }
}
