module.exports = {
  configureWebpack: {
    optimization: {
      concatenateModules: !process.env.REPORT,
    },
  },
  chainWebpack: (config) => {
    // pack for DEMO
    if (process.env.ENV === 'DEMO') {
      config
        .plugin('html')
        .tap((args) => {
          args[0].template = './demo/public/index.html';
          return args;
        });
    }
  },
};
