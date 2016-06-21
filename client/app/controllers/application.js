import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  alertMessage: '',
  isRecepient: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'recepients';
  }),
  isDonor: Ember.computed('currentRouteName', function() {
    return this.get('currentRouteName') === 'donors';
  }),
  location: {}
});
