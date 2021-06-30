const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const company = new Schema({
  name: String,
  adress: String,
  phone: String,
  email: String,
  timeZone: String,
  logo: String,

  date: { type: Date, default: Date.now },
  users: [
    {
      userId: {
        type: Schema.Types.ObjectId
      },
      firstName: String,
      lastName: String,
      avatar: String
    }
  ],
  projects: [
    {
      projectId: Schema.Types.ObjectId,
      projectName: { type: String, required: true, unique: true },
      email: String,
      contactName: String
    }
  ]
});

module.exports = Company = mongoose.model("company", company);
