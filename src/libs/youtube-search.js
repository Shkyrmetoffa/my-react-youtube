const axios = require('axios');

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

module.exports = (options, callback) => {
  if (!options.key) {
    throw new Error('Youtube Search expected key, received undefined');
  }
  let params = {
    maxResults: 10,
    part: 'snippet',
    key: options.key,
    q: options.term,
    type: 'video'
  };

  axios.get(ROOT_URL, { params: params })
    .then(response => {
      if (callback) { callback(response.data.items); }
    })
    .catch(error => {
      console.error(error);
    });
};
