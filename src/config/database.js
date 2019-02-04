'use strict'
import mongoose from 'mongoose'

export default class Database {

  constructor (env) {
    mongoose.Promise = global.Promise
    return env === 'production' ? this.production(): this.local();
  }

  production () {
    let connection
    return connection = mongoose.connect(process.env.MONGODB_URI)
      .then(() => {
        console.log('Database connected successfully')
      }).catch((err) => {
        console.error(err)
      })
  }

  local () {
    let connection
    const localURI = "mongodb://api-web-client:101520api@ds221155.mlab.com:21155/heroku_49zrcqxs"
    return connection = mongoose.connect(localURI, (err, db) => {
      if (err) console.log(err);
      if (mongoose.connection.readyState === 1)
        return connection
    })
  }

}