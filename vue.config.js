module.exports = {
  configureWebpack: {
    optimization: {
      concatenateModules: !process.env.REPORT,
    },
  },
};
