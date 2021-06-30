const Company = require("../models/newCompany");
const normalizeData = require("../services/normalizeData");
const CompanyUser = require("../models/CompanyUser");

exports.newOrUpdate = async function (req, res) {
  const { _id, name, adress, phone, email, timeZone, logo } = req.body;
  // NOTE Clear the code
  const companyFields = {};
  if (_id) companyFields._id = _id;
  if (name) companyFields.name = name;
  if (email) companyFields.email = email;
  if (adress) companyFields.adress = adress;
  if (logo) companyFields.logo = logo;
  if (phone) {
    //format the mobileNumber
    companyFields.phone = normalizeData.normalizePhoneNumber(phone);
  }
  if (timeZone) companyFields.timeZone = timeZone;

  try {
    if (_id) {
      const findCompany = await Company.findOne({ _id });
      // use upsert: true option and cleare the code  ----  Using upsert option (creates new doc if no match is found):
      if (findCompany) {
        // Update
        company = await Company.findOneAndUpdate(
          { _id: _id }, // filter
          { $set: companyFields }, // update
          { new: true }
        );
        return res.json(company);
      }
    }

    const companyNew = new Company(companyFields);

    await companyNew.save();

    res.json({ companyNew });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error" });
  }
};

//All companies
exports.allCompanies = async function (req, res) {
  try {
    const companies = await Company.find();

    res.json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};

// Get Company profile by id
exports.companyProfile = async function ({ params: { id } }, res) {
  try {
    const company = await Company.findOne({ _id: id });

    if (!company) return res.status(400).json({ msg: "Company not found" });

    return res.json(company);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
// Remove Company profile by id
exports.removeCompany = async function ({ params: { id } }, res) {
  try {
    await Company.findOneAndRemove({ _id: id });
    await CompanyUser.deleteMany({ company: id });
    res.json({ msg: "Comopany deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server error" });
  }
};
