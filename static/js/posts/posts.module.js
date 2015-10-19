(function () {
  'use strict';

  angular
    .module('startline.posts', [
      'startline.posts.controllers',
      'startline.posts.directives',
      'startline.posts.services',
      'ngSanitize',
      'textAngular',
    ]);

  angular
    .module('startline.posts.controllers', []);

  angular
    .module('startline.posts.directives', ['ngDialog']);

  angular
    .module('startline.posts.services', []);
})();