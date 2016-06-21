import RESTAPIAdapter from 'ember-data/adapters/rest';
import ENV from '../config/environment';

export default RESTAPIAdapter.extend({
  namespace: ENV.APP.APIV,
  host: ENV.APP.DOMAIN
});
