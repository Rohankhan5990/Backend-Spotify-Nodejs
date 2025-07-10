// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user_controller");
const {
  authorizeSpotifyAndFetchArtist,
} = require("../controllers/spotify_controller");

// Spotify Authorization Route
// router.get('/authorize', authorizeSpotify);

// Route to get artist data from Spotify using artist ID
router.post("/artist", authorizeSpotifyAndFetchArtist);

router.post("/init", userController.initiateRegistration);

router.put("/role", userController.updateAccountRole);

router.put("/country", userController.updateCountry);

router.put("/address", userController.updateAddress);

router.put("/manualAddress", userController.manualUpdateAddress);

router.put("/hearAbout", userController.updateHearAbout);

router.put("/artistName", userController.updateArtistName);

router.put("/spotifyUrl", userController.updateSpotifyUrl);

module.exports = router;
