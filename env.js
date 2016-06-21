export default {
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/blood-donor',
  SERVER_PORT: process.env.SERVER_PORT || '3000',
  NETWORK_LAYER: process.env.NETWORK_LAYER || 'http://localhost',
  API: '/api/v1'
}
