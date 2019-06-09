const config = {
    api: process.env.API_URL,
    auth: {
        siteDomain: process.env.SITE_URL,
        domain: process.env.AUTH_DOMAIN,
        clientID: process.env.CLIENT_ID,
        redirectUri: process.env.AUTH_REDIRECT_URL
    }
};
export default config;