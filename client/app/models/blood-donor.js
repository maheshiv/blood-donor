import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import EmberValidations from 'ember-validations';
import ENV from '../config/environment';

let BloodDonor = Model.extend(EmberValidations, {
  firstName: attr('string'),
  lastName: attr('string'),
  fullName: Ember.computed('firstName', 'lastName', {
    get: function() {
      return this.get('firstName') + ' ' + this.get('lastName');
    }
  }),
  email: attr('string'),
  phoneNumber: attr('string'),
  bloodGroup: attr('string'),
  longitude: attr('number'),
  latitude: attr('number'),
  address: attr('string'),
  userIP: attr('string')
});

BloodDonor.reopen({
  validations: {
    email: {
      presence: true,
      format: {
        with: /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i ,
        message: 'must be valid email'
      }
    },
    phoneNumber: {
      presence: true,
      format: {
        with: /^((?:00|\+)[\d]{2})(\s?)([\d]{3})(\s?)(([\d]{4}))(\s?)(([\d]{3}))$/,
        message: 'format +XX XXX XXXX XXX or 00XX XXX XXXX XXX'
      }
    },
    bloodGroup: {
      presence: true
    }
  }
});

export default BloodDonor;
