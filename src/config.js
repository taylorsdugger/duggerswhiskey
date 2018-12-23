const config = {
    api: "http://localhost:3001/",
    auth: {
        siteDomain: 'https://duggerswhiskey.net/',
        domain: 'duggerswhiskey.auth0.com',
        clientID: 'R600OJ9xOLh6mRWGgGNG5YCSS3oVHEnu',
        redirectUri: process.env.AUTH_REDIRECT_URL || 'https://duggerswhiskey.net/callback'
    }
};
export default config;