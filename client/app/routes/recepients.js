import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentCoords = this.controllerFor('application').get('location');
    return this.store.query('blood-donor', currentCoords);
  }
});
