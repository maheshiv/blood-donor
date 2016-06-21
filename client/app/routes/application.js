import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  socketIOService: Ember.inject.service('socket-io'),
  beforeModel() {
    let app = this.controllerFor('application');
    if (app && !app.get('location').longitude) {
      return (new Ember.RSVP.Promise(function(resolve, reject) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(pos) {
            resolve({longitude: pos.coords.longitude, latitude: pos.coords.latitude});
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
  initializeSocket: Ember.on('init', function() {
    let socket = this.get('socketIOService').socketFor(ENV.APP.DOMAIN);
    socket.on('connect', this.onConnect, this);
  }),
  onConnect() {
    console.log('connection established');
  }
});
