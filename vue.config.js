module.exports = {
  publicPath: './',
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
          args[0].favicon = './demo/public/favicon.ico';
          return args;
        });
    }
  },
};
