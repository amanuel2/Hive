(function (angular) {
    angular.module('Hive')
        .config(stateParams);

    /* @ngInject */
    function stateParams($stateProvider, $urlRouterProvider, $mdThemingProvider, $ionicConfigProvider) {
          $ionicConfigProvider.tabs.position('bottom'); 
          $ionicConfigProvider.tabs.style("standard");
          $stateProvider
            .state('home', {
                url: '/home',
                templateUrl:'app/components/home/home.html',
                controller: 'homeCtrl'
            })
            
            .state('me' , {
                url:'/me',
                templateUrl:'app/components/me/me.html',
                controller:'meCtrl'
            })
            
            .state('discussions' , {
                url:'/discussions',
                templateUrl:'app/components/discussions/discussions.html',
                controller:'discussionsCtrl'
            })
            
            .state('board', {
                url:'/board',
                templateUrl:'app/components/board/board.html',
                controller:'boardCtrl'
            })
            
            .state('register', {
                url:'/register',
                templateUrl:'app/components/register/register.html',
                controller:'registerCtrl'
            })
            
            .state('login', {
                url:'/login',
                templateUrl:'app/components/login/login.html',
                controller:'loginCtrl'
            })
        
            
        
        $urlRouterProvider.otherwise('/home');
    }
})(angular);