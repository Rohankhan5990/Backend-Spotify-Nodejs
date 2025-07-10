const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegistrationDataSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    accountRole: {
      type: String,
      enum: ["manager", "client", "employee"],
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    manAddress: {
        address: { type: String, required: false },
        address1: { type: String, required: false },
        town: { type: String, required: false },
        country: { type: String, required: false },
        postalCode: { type: String, required: false },
      },
    address: {
        type: String,
        required: false, 
      },
    hearAbout: {
      value: { type: String, required: false }, 
      checkboxSelected: { type: Boolean, required: false },
    },
    artistName: {
      type: String,
      required: false,
    },
    spotifyUrl: {
      type: String,
      required: false, 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RegistrationData", RegistrationDataSchema);
