 (function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
         });
      $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/template/home.html',
         })
            .state('rooms', {
                url: '/rooms',
                controller: 'RoomCtrl as rooms',
                templateUrl: '/template/rooms.html'

         });
     }
      angular
         .module('blocChat', ['ui.router'])
         .config(config);
 })();