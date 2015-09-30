(function () {
  'use strict';

  angular
    .module('startline.routes')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController', 
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/register.html'
    }).when('/login', {
      controller: 'LoginController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/authentication/login.html'
    }).when('/posts', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: '/static/templates/layout/index.html'
    }).when('/home', {
        templateUrl: '/static/templates/home/index.html'
    }).when('/about', {
        templateUrl: '/static/templates/home/about.html'
    }).when('/portfolio', {
        templateUrl: '/static/templates/home/portfolio.html'
    }).when('/contact', {
        templateUrl: '/static/templates/home/contact.html'
    }).when('/portfolio_single', {
        templateUrl: '/static/templates/home/portfolio_single.html'
    }).otherwise('/home');
  }
})();