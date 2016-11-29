var myAppModule = angular.module('medWebStudio', ['ui.router']);

myAppModule.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'jsController',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html',
        controller: 'jsController',
      })
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'partials/about.html',
      //   controller: 'jsController',
      // })
      .state('projects', {
        url: '/projects',
        templateUrl: 'partials/projects.html',
        controller: 'jsController',
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'partials/contacts.html',
        controller: 'jsController',
      })
      // .when('/home',{
      //       templateUrl: 'partials/home.html',
      //       controller: 'jsController'
      // })
      // .when('/about',{
      //       templateUrl: 'partials/about.html',
      //       controller: 'jsController'
      // })
      // .otherwise({
      //     redirectTo: '/home'
      // });

      // $locationProvider.html5Mode({
      //   enabled: true,
      //   requireBase: false
      // });

      $locationProvider.html5Mode(true);

}]);

