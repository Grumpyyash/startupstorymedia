const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const { createSecureHeaders } = require("next-secure-headers");

dotenvLoad();

const withEnv = nextEnv();
module.exports = withEnv();

module.exports = {
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
};
