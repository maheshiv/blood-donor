import models from '../models';
let BloodDonor = models.BloodDonor;

function create(req, res, next) {
  let body = req.body.bloodDonor;
  body.location = [body.longitude, body.latitude];
  delete body.longitude;
  delete body.latitude;
  let bloodDonor = new BloodDonor(body);
  bloodDonor.save(function(err, bloodDonor) {
    if (err)
      return res.send(400, err);
    res.resource = {
      bloodDonors: bloodDonor
    };
    res.send({bloodDonors: bloodDonor});
    next();
  });
}

function update(req, res, next) {
  let id = req.params.id;
  let updateBloodDonor = req.body.bloodDonor;
  let handleError = function(err) {
    return res.send(400, err);
  };

  BloodDonor.findById(id).then(function(bloodDonor) {
    if (!bloodDonor)
      return res.send(404);

    bloodDonor.firstName = updateBloodDonor.firstName;
    bloodDonor.lastName = updateBloodDonor.lastName;
    bloodDonor.phoneNumber = updateBloodDonor.phoneNumber;
    bloodDonor.email = updateBloodDonor.email;
    // bloodDonor.location = [updateBloodDonor.longitude, updateBloodDonor.latitude];
    bloodDonor.address = updateBloodDonor.address;
    bloodDonor.bloodGroup = updateBloodDonor.bloodGroup;

    return bloodDonor.save().then(function(updatedBloodDonor) {
      res.resource = {
        bloodDonors: updatedBloodDonor
      };
      res.send({bloodDonors: updatedBloodDonor});
      next();
    });
  }).catch(handleError);
}

function show(req, res, next) {
  let id = req.params.id;
  BloodDonor.findById(id, function(err, bloodDonor) {
    if (err)
      return res.send(400, err);

    if (!bloodDonor)
      return res.send(404);

    return res.send({bloodDonors: bloodDonor});
  });
}

function list(req, res, next) {
  let query = {};
  if (req.query.longitude && req.query.latitude) {
    query = {location: {$near: [req.query.longitude, req.query.latitude], $maxDistance: 8}};
  }
  BloodDonor.find(query, function(err, bloodDonors) {
    if (err)
      return res.send(400, err);

    return res.send({bloodDonors: bloodDonors});
  });
}

function remove(req, res, next) {
  let id = req.params.id;
  BloodDonor.findByIdAndRemove(id, function(err) {
    if (err)
      return res.send(400, err);
    res.resource = {
      id: id
    };
    res.sendStatus(204);
    next();
  });
}

export default {
  create,
  update,
  show,
  list,
  remove
}
