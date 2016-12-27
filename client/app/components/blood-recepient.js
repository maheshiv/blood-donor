import Ember from 'ember';
import ENV from '../config/environment';
const { Component, inject } = Ember;

export default Component.extend({
  mapService: inject.service('map'),
  store: inject.service(),
  featureLyr: null,
  willRender() {
    const socket = io(ENV.APP.DOMAIN);
    socket.on('create', this.onCreate, this);
    socket.on('update', this.onUpdate, this);
    socket.on('delete', this.onDelete, this);
  },
  // mapFeatureSource(data) {
  //
  // },
  onCreate(data) {
    let store = this.get('store');
    store.push(store.normalize('blood-donor', data.bloodDonors));
    //To update model
    store.peekRecord('blood-donor', data.bloodDonors.id);
  },

  onUpdate(data) {
    let store = this.get('store');
    store.push(store.normalize('blood-donor', data.bloodDonors));
    store.peekRecord('blood-donor', data.bloodDonors.id);
  },

  onDelete(data) {
    let deleteDonor = this.get('store').peekRecord('blood-donor', data.id);
    if (deleteDonor) {
      deleteDonor.deleteRecord();
    }
  },

  didInsertElement() {

  },

  willDestroyElement() {
    const socket = io(ENV.APP.DOMAIN);
    socket.off('create', this.onCreate);
    socket.off('update', this.onUpdate);
    socket.off('delete', this.onDelete);
  },

  actions: {
    searchDonors(longitude, latitude) {
      this.get('store').query('blood-donor', {longitude: longitude, latitude: latitude});
    }
  }
});
