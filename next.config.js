const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datnguyen2409-bkrental-dev.s3.ap-southeast-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cloud.mogi.vn",
      },
    ],
  },
};
