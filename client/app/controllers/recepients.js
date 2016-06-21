import Ember from 'ember';

export default Ember.Controller.extend({
  app: Ember.inject.controller('application'),
  formatFields: Ember.computed(function() {

  }),
  formatFeatures: Ember.computed('model.@each.email', function() {

  })
});
