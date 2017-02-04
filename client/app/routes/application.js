import Ember from 'ember';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import ENV from '../config/environment';

const { Route, RSVP, on } = Ember;

export default Route.extend(/*ApplicationRouteMixin,*/ {
  beforeModel() {
    let app = this.controllerFor('application');
    if (app && !app.get('location').longitude) {
      return (new RSVP.Promise(function(resolve, reject) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(pos) {
            resolve({ longitude: pos.coords.longitude, latitude: pos.coords.latitude });
          }, function(err) {
            console.log('Error', err);
            reject(err);
          });
        } else {
          resolve({});
        }
      })).then(function(currentCoords) {
        app.set('location', currentCoords);
      }.bind(this));
    }
  },
  initializeSocket: on('init', function() {
    let socket = io(ENV.APP.DOMAIN);
    socket.on('connect', this.onConnect, this);
  }),
  onConnect() {
    console.log('connection established');
  }
});
