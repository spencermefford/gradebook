//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-mocks.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-aria.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.8/angular-animate.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.0.9/angular-material.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min.js',
      'app.js',
      'app.config.js',
      'app.constants.js',
      'app.routes.js',
      'components/**/*.js',
      'services*/**/*.js',
      'grades*/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
