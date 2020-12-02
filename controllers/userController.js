const db = require("../models");

// Defining methods for the userController
module.exports = {
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: async function (req, res) {
    const { email, password, firstName, lastName, gender, dob, passwordCheck } = req.body;
    
    if (!email || !password || !firstName || !lastName || !gender || !dob)
      return res
        .status(400)
        .json({ msg: "Missing required fields" });
    if (password.length < 4)
      return res
        .status(400)
        .json({ msg: "Password must be at least 4 characters" });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Password check does not match" });
    const existingUser = await db.User.findOne({email: email})
    if (existingUser)
      return res
      .status(400)
      .json({msg: "Email already in use" });
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json({msg: "Must be a valid email address"}));
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
