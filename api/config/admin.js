module.exports = ({ env }) => ({
    apiToken: {
        salt: env('API_TOKEN_SALT', '2f90a3cf5efca9b55bc78255fa34c6cc'),
      },
    auth: {
        secret: env('ADMIN_JWT_SECRET', '6b92e0dc0c7060d76b2caa2d98a2c762'),
      },
  })
  