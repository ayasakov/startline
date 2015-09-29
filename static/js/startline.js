(function () {
  'use strict';

  angular
    .module('startline', [
      'startline.config',
      'startline.routes',
      'startline.authentication',
      'startline.layout',
      'startline.posts',
      'startline.utils',
    ])
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }

  angular
    .module('startline.routes', ['ngRoute']);

  angular
    .module('startline.config', []);
})();