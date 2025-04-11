import path from 'path';
export default {
  webpack: (config) => {
    config.entry = path.resolve(__dirname, 'src/pages/index.js');
    return config;
  },
};


