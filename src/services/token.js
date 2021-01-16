const jwt = require('jsonwebtoken')

const sign = payload => jwt.sign(payload, 'rocketseat')

const verify = token => new Promise((resolve, reject) =>
  jwt.verify(
    token,
    'rocketseat',
    (error, data) => error ? reject(error) : resolve(data)
  )
)

module.exports = {
  sign,
  verify,
}
