module.exports = function (wallaby) {
  return {
    files: ['src/**/*.ts', '!src/**/*.spec.ts', 'tsconfig.json'],
    tests: ['src/**/*.spec.ts'],
    env: {
      type: 'node',
    },
    testFramework: 'jasmine',
    compilers: {
      '**/*.ts': wallaby.compilers.typeScript({
        module: 'commonjs',
      }),
    },
  };
};
