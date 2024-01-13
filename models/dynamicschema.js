const mongoose = require('mongoose');

const dynamicFormSchema = new mongoose.Schema({
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: 'CombinedCompany', required: true },
  fields: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
    },
  ],
});


const DynamicForm = mongoose.model('DynamicForm', dynamicFormSchema);
module.exports = DynamicForm;
