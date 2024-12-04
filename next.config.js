/*
    next.config.js

    Configuration file for my next.js app. Mainly, this makes it so fast refresh works because I was having a lot of issues with it's default setting not updating my page
*/

module.exports = {
    reactStrictMode: true, // This enables React's Strict Mode
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          poll: 1000, // Check for changes every second
          aggregateTimeout: 300, // Delay rebuild after the first change
        };
      }
      return config;
    },
    experimental: {
      appDir: true, // Enable the experimental `app` directory structure
    },
  };
  