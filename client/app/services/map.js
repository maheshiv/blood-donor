import Ember from 'ember';

export default Ember.Service.extend({
  map: null,
  view: null,
  initializeMap: Ember.on('init', function() {


  }),
  loadView: function(element) {

  }
});
