/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      APIV: 'api/v1',
      DOMAIN: process.env.DOMAIN || 'http://localhost:3000',
      CLIENT_DOMAIN: process.env.CLIENT_DOMAIN || 'http://localhost:4200'
    },
    //Add any gmap config here
    'g-map': {
      libraries: ['places', 'geometry'],
      key: 'AIzaSyB4kOKmq7EwvB3Tt-RqObP3tT6eB28S7zw'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
  ENV.APP.API = ENV.APP.DOMAIN + ENV.APP.APIV;
  return ENV;
};
