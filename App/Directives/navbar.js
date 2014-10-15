
(function() {
	'use strict';
	angular.module('wrightApp').directive('navBar', NavBar);

	function NavBar() {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			templateUrl: 'App/Directives/navbar.html',
			controller: 'NavBarCtrl',
			controllerAs: 'vm'
		}
	}
})();

(function() {
	'use strict';
	angular.module('wrightApp')
		.controller('NavBarCtrl', NavBarCtrl);
NavBarCtrl.$inject = ['$location'];
	function NavBarCtrl($location) {
		var vm = this;
			vm.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

	}
})();