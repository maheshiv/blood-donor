import ENV from '../../env';
import controllers from '../controllers';
import express from 'express';
import utils from '../utils';
let bloodDonor = controllers.bloodDonor;

export default function(app, sockClient) {
  let router = express.Router(),
    client;
  app.use(ENV.API, router);
  router.post('/bloodDonors', bloodDonor.create, utils.sendSocketClient('create', client=sockClient));
  router.put('/bloodDonors/:id', bloodDonor.update, utils.sendSocketClient('update', client=sockClient));
  router.get('/bloodDonors/:id', bloodDonor.show);
  router.get('/bloodDonors', bloodDonor.list);
  router.delete('/bloodDonors/:id', bloodDonor.remove, utils.sendSocketClient('delete', client=sockClient));
}
