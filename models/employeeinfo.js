const mongoose = require('mongoose');

const employeeInfoSchema = new mongoose.Schema({
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'CombinedCompany',required: true},
  photo: String,
  employeeData: [
    {
      name: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
});

const EmployeeInfo = mongoose.model('EmployeeInfo', employeeInfoSchema);
module.exports = EmployeeInfo;
