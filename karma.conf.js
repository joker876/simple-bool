module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: 'src/**/*.ts' }],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
    },
    karmaTypescriptConfig: {
      tsconfig: './tsconfig.jasmine.json',
    },
    browsers: ['Firefox'],
    singleRun: false,
    autoWatch: true,
    reporters: ['progress', 'kjhtml'],
    client: {
      clearContext: false,
    },
  });
};
