import Ember from 'ember';
const { Service, on } = Ember;

export default Service.extend({
  map: null,
  view: null,
  initializeMap: on('init', function() {

  })
  // loadView: function(element) {
  //
  // }
});
