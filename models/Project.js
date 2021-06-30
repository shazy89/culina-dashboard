const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  companyId: Schema.Types.ObjectId,
  projectName: {
    type: String,
    required: true,
    unique: true
  },
  state: String,
  city: String,
  address: String,
  zipCode: String,
  startDate: Date,
  deadLine: Date,
  completed: {
    type: Boolean,
    default: false
  },
  contract: String,
  email: String,
  contactName: String,
  contactCompanyName: String,
  contactNumber: String,
  description: String,
  notes: String
});

module.exports = ProjectSchema = mongoose.model("project", projectSchema);
