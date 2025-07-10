
const axios = require("axios");
require("dotenv").config();
const authorizeSpotifyAndFetchArtist = async (req, res) => {
  const { artistUrl } = req.body; 
  if (!artistUrl) {
    return res.status(400).json({
      error: "Please provide a Spotify artist URL in the request body.",
    });
  }
  try {
    const tokenResponse = await axios.post(
      process.env.SPOTIFY_TOKEN_URL,
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
          ).toString("base64")}`,
        },
      }
    );
    const accessToken = tokenResponse.data.access_token;
    const artistId = artistUrl.split("/artist/")[1].split("?")[0];
    const artistResponse = await axios.get(
      `${process.env.SPOTIFY_API_BASE_URL}/artists/${artistId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.status(200).json(artistResponse.data);
  } catch (error) {
    console.error("Error fetching artist data:", error.message);
    return res.status(400).json({
      error: "Failed to get artist data",
      details: error.message,
    });
  }
};

module.exports = {
  authorizeSpotifyAndFetchArtist,
};
