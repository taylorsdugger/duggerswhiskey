const config = {
    api: process.env.REACT_APP_API_URL,
    auth: {
        siteDomain: process.env.REACT_APP_SITE_URL,
        domain: process.env.REACT_APP_AUTH_DOMAIN,
        clientID: process.env.REACT_APP_CLIENT_ID,
        redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URL
    }
};
export default config;