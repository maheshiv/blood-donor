import Ember from 'ember';
const { Controller, inject } = Ember;

export default Controller.extend({
  app: inject.controller('application')
});
