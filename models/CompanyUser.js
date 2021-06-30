const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const companyUserSchema = new Schema({
  company: {
    type: Schema.Types.ObjectId
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: String,
  lastName: String,
  avatar: String,
  userType: String,
  annualSalary: String,
  monthlyWage: String,
  weeklyWage: String,
  dailyWage: String,
  hourlyWage: String,
  hoursPerWeek: String,
  hrRate: String,
  position: String,
  state: String,
  city: String,
  address: String,
  country: String,
  zipCode: String,
  birthday: String,
  gender: String,
  admin: {
    type: Boolean,
    default: false
  },

  date: {
    type: Date,
    default: Date.now
  }
});

companyUserSchema.pre("save", function (next) {
  const user = this;
  //  if(!user.isDirectModified('password')){
  //      return next()
  //  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) next(err);
      user.password = hash;
      next();
    });
  });
});
module.exports = CompanyUser = mongoose.model("companyUser", companyUserSchema);
