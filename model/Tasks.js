const mongoose = require("mongoose"),
  { model, Schema } = mongoose;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    /* A mongoose option that prevents the creation of a `__v` field in the database. */
    versionKey: false,
  }
);
const Task = model("Task", taskSchema);

module.exports = Task;
