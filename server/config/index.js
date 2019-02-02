require('dotenv').config('');

const config = {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  pagination: {
    limit: 10,
    skip: 0,
    page: 1,
  },
  token: {
    secret: process.env.TOKEN_SECRET,
  },
};

module.exports = config;