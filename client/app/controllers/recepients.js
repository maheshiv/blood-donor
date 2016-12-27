import Ember from 'ember';
const { Controller, inject, computed } = Ember;

export default Controller.extend({
  app: inject.controller('application'),
  formatFields: computed(function() {

  }),
  formatFeatures: computed('model.@each.email', function() {

  })
});
