const { createJWT, isTokenValid, attachCookiesToResponse } = require('./jwt');
const createUserToken = require('./createTokenUser');

module.exports = {
  createJWT,
  isTokenValid,
  attachCookiesToResponse,
  createUserToken,
};
