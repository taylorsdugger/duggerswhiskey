const config = {
    api: "",
    auth: {
        siteDomain: 'https://duggerswhiskey.com',
        domain: 'duggerswhiskey.auth0.com',
        clientID: 'R600OJ9xOLh6mRWGgGNG5YCSS3oVHEnu',
        redirectUri: process.env.AUTH_REDIRECT_URL || 'http://localhost:3000/callback'
    }
};
export default config;