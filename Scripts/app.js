var wrightApp = angular.module("wrightApp",
    ['ngRoute']);
wrightApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: 'Views/partials/Home.html'
            })
        .when('/Realtors',
            {
                templateUrl: 'Views/partials/Realtors.html'
            })
        .otherwise({ redirectTo: '/' });

});
