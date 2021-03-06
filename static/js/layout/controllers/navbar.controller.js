/**
* NavbarController
* @namespace startline.layout.controllers
*/
(function () {
  'use strict';

  angular
    .module('startline.layout.controllers')
    .controller('NavbarController', NavbarController);

  NavbarController.$inject = ['$scope', 'Authentication'];

  /**
  * @namespace NavbarController
  */
  function NavbarController($scope, Authentication) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
    vm.logout = logout;

    /**
    * @name logout
    * @desc Log the user out
    * @memberOf startline.layout.controllers.NavbarController
    */
    function logout() {
      Authentication.logout();
    }
  }
})();