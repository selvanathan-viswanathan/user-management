import * as mongoose from "mongoose";

const { Schema } = mongoose;
const scopeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  updatedBy: {
    type: String,
    default: "self",
  },
  createdBy: {
    type: String,
    default: "self",
  },
});

scopeSchema.pre("save", function scopeSchemaPreSaveHook(next) {
  this.updatedAt = Date.now();
  next();
});
const ScopeModel = mongoose.model("ScopeModel", scopeSchema);

export default ScopeModel;
