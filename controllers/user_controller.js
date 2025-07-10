const RegistrationData = require("../models/user_register");
const mongoose = require("mongoose");

// Initiate Registration
exports.initiateRegistration = async (req, res) => {
  const userId = new mongoose.Types.ObjectId();
  const newRegistration = new RegistrationData({ userId });
  try {
    await newRegistration.save();
    res.status(201).json({ message: "Registration initiated", userId: userId });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Account Role
exports.updateAccountRole = async (req, res) => {
  const { userId, accountRole } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please provide the userId" });
  }

  if (!accountRole) {
    return res.status(400).json({ error: "Please provide the accountRole" });
  }

  try {
    const registration = await RegistrationData.findOneAndUpdate(
      { userId },
      { accountRole },
      { new: true }
    );
    res.status(200).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Country
exports.updateCountry = async (req, res) => {
  const { userId, country } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please provide the userId" });
  }

  if (!country) {
    return res.status(400).json({ error: "Please provide the country" });
  }

  try {
    const registration = await RegistrationData.findOneAndUpdate(
      { userId },
      { country },
      { new: true }
    );
    res.status(200).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Address
exports.updateAddress = async (req, res) => {
  const { userId, address } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please provide the userId" });
  }

  if (!address) {
    return res.status(400).json({ error: "Please provide the address" });
  }

  try {
    const registration = await RegistrationData.findOneAndUpdate(
      { userId },
      { address },
      { new: true }
    );
    res.status(200).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.manualUpdateAddress = async (req, res) => {
  const { userId, address, address2, town, country, postalCode } = req.body;
  if (!userId) {
    return res.status(400).json({ error: "Please provide the userId" });
  }
  if (!address || !town || !country || !postalCode) {
    return res
      .status(400)
      .json({
        error:
          "Please provide all required fields: address, town, country, and postalCode",
      });
  }
  try {
    const existingRegistration = await RegistrationData.findOne({ userId });
    if (!existingRegistration) {
      return res.status(404).json({ error: "User not found" });
    }
    const updatedRegistration = await RegistrationData.findOneAndUpdate(
      { userId },
      {
        $set: {
          "manAddress.address": address,
          "manAddress.address1": address2,
          "manAddress.town": town,
          "manAddress.country": country,
          "manAddress.postalCode": postalCode,
        },
      },
      { new: true }
    );

    res
      .status(200)
      .json({
        message: "Address updated successfully",
        registration: updatedRegistration,
      });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateHearAbout = async (req, res) => {
    const { userId, hearAbout } = req.body;
  
    if (!userId) {
      return res.status(400).json({ error: "Please provide the userId" });
    }
  
    if (!hearAbout || typeof hearAbout.value !== 'string') {
      return res.status(400).json({ error: "Please provide how you heard about us" });
    }
  
    const updateHearAbout = {
      value: hearAbout.value,
      checkboxSelected: hearAbout.checkboxSelected || false 
    };
    try {
      const registration = await RegistrationData.findOneAndUpdate(
        { userId },
        { hearAbout: updateHearAbout },
        { new: true } 
      );
      if (!registration) {
        return res.status(404).json({ error: "Registration not found" });
      }
      res.status(200).json({ message: "Hear about updated successfully", registration });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

// Update Artist Name
exports.updateArtistName = async (req, res) => {
  const { userId, artistName } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please provide the userId" });
  }

  if (!artistName) {
    return res.status(400).json({ error: "Please provide the artistName" });
  }

  try {
    const registration = await RegistrationData.findOneAndUpdate(
      { userId },
      { artistName },
      { new: true }
    );
    res.status(200).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Spotify URL
exports.updateSpotifyUrl = async (req, res) => {
  const { userId, spotifyUrl } = req.body;

  if (!userId) {
    return res.status(400).json({ error: "Please provide the userId" });
  }

  if (!spotifyUrl) {
    return res.status(400).json({ error: "Please provide the Spotify URL" });
  }

  try {
    const registration = await RegistrationData.findOneAndUpdate(
      { userId },
      { spotifyUrl },
      { new: true }
    );
    res.status(200).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
