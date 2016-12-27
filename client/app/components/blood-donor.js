import Ember from 'ember';
const { Component, inject, on, set, run, $ } = Ember;
export default Component.extend({
  store: inject.service(),
  mapService: inject.service('map'),
  initializeModal: on('init', function() {
    set(this, 'bloodDonorModel', this.get('store').createRecord('blood-donor', {}));
    $.getJSON('//api.ipify.org?format=jsonp&callback=?', run.bind(this, function(data) {
      console.log('ip', data);
      this.set('userIP', data.ip);
    }));
  }),
  userIP: null,
  showModal: false,
  actions: {
    saveDonor() {
      let bloodDonorModel = this.get('bloodDonorModel');
      bloodDonorModel.setProperties({
        userIP: this.get('userIP')
      });
      bloodDonorModel.save().then(function(data) {
        //Have to improve by using link-to element instead of <a>
        let message = `<strong>Saved!</strong> Please note this link <a href="${data.get('privateLink')}" class="alert-link">${data.get('link')}</a> to update or delete your information.`;
        this.get('app').set('alertMessage', message);
        this.toggleProperty('showModal');
        this.set('bloodDonorModel', this.get('store').createRecord('blood-donor', {}));
      }.bind(this));
    },
    toggleModal() {
      this.toggleProperty('showModal');
    }
  },
  didInsertElement() {

  }
});
