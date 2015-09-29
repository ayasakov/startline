(function () {
  'use strict';

  angular
    .module('startline.posts', [
      'startline.posts.controllers',
      'startline.posts.directives',
      'startline.posts.services'
    ]);

  angular
    .module('startline.posts.controllers', []);

  angular
    .module('startline.posts.directives', ['ngDialog']);

  angular
    .module('startline.posts.services', []);
})();