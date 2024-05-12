const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "scss")],
  },
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
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
      {
        protocol: "https",
        hostname: "a0.muscache.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};
