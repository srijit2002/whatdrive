const Fs = require("fs");
const Axios = require("axios");

async function downloadFile(url, path) {
  const response = await Axios({
    url,
    method: "GET",
    responseType: "stream",
  });
  return response.data;
}

module.exports = downloadFile;
