(function () {
  'use strict';

  angular
    .module('startline.authentication', [
      'startline.authentication.controllers',
      'startline.authentication.services'
    ]);

  angular
    .module('startline.authentication.controllers', []);

  angular
    .module('startline.authentication.services', ['ngCookies']);
})();