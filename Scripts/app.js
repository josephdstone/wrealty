var wrightApp = angular.module("wrightApp",
    ['ngRoute']);
wrightApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: '/Views/partials/Home.html'
            })
        .when('/Realtors',
            {
                templateUrl: '/Views/partials/Realtors.html'
            })
        .when('/About',
            {
                templateUrl: '/Views/partials/About.html'
            })
        .when('/employeeAccount',
            {
                templateUrl: '/Views/partials/employeeAccount.html'
            })
        .when('/batches',
            {
                templateUrl: '/Views/partials/batches.html'
            })
        .when('/packages',
            {
                templateUrl: '/Views/partials/packages.html'
            })
        .when('/search',
            {
                templateUrl: '/Views/partials/search.html'
            })
        .otherwise({ redirectTo: '/' });

});
