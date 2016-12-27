import Ember from 'ember';
// import ENV from '../config/environment';
const { Controller, computed, inject } = Ember;

export default Controller.extend({
  session: inject.service('session'),
  alertMessage: '',
  isRecepient: computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'recepients';
  }),
  isDonor: computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'donors';
  }),
  location: {},
  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
