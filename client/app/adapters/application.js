import RESTAPIAdapter from 'ember-data/adapters/rest';
// import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';

export default RESTAPIAdapter.extend(/*DataAdapterMixin,*/ {
  // authorizer: 'authorizer:oauth2',
  namespace: ENV.APP.APIV,
  host: ENV.APP.DOMAIN
});
