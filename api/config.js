const config = {
  pageSize: 6,
  dburl: process.env.DATABASEURL || 'mongodb://localhost/recipe',
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV !== 'production'
}

module.exports = config
