const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.export = mongoose.model("Category", CategorySchema);
