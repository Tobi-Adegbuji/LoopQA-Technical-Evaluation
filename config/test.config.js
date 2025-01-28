require('dotenv').config();

module.exports = {
    credentials: {
        username: process.env.TEST_USERNAME || 'default_username',
        password: process.env.TEST_PASSWORD || 'default_password'
    },
    baseUrl: process.env.BASE_URL || 'https://animated-gingersnap-8cf7f2.netlify.app'
}; 