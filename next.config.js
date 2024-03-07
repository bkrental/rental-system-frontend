const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datnguyen2409-bkrental-dev.s3.ap-southeast-1.amazonaws.com",
      },
    ],
  },
};
