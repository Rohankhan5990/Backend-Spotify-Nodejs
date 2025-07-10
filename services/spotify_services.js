const axios = require('axios');

const fetchArtistDetails = async (artistId, token) => {
  const response = await axios.get(`${process.env.SPOTIFY_API_BASE_URL}/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

module.exports = { fetchArtistDetails };
