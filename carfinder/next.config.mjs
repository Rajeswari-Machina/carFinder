const config = {
  webpack: (config) => {
    config.entry = path.resolve(__dirname, 'src/pages/index.js');
    return config;
  },
  devIndicators: false 
};
