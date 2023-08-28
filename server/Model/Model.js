const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  start_year: Number,
  end_year: Number,
  title: String,
  insight: String,
  url: String,
  sector: String,
  topic: String,
  source: String,
  pestle: String,
  added: Date,
  published: Date,
  country: String,
  region: String,
  likelihood: Number,
  relevance: Number,
  intensity: Number,
  impact: Number,
});

module.exports = mongoose.model("Data", DataSchema);
