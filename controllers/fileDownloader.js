const axios = require("axios");
const path = require("path");
const fs = require("fs");

const downloadFile = async (url, filename) => {
  const filepath = path.join(__dirname, "../", "public", filename);
  const response = await axios({
    method: "get",
    url,
    responseType: "stream",
  });
  response.data.pipe(fs.createWriteStream(filepath));
};
// downloadFile(
//   "https://api.twilio.com/2010-04-01/Accounts/ACc1986d61d74782c7e657dd7f38f8dcda/Messages/MMb134929c9a8ccf2579af280bedf51968/Media/ME093599dc64b10c2b0d7210c5b0f15e02",
//   "image/jpeg"
// );
module.exports = downloadFile;
