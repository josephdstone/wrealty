
(function() {
	'use strict';
	angular.module('wrightApp').directive('navBar', NavBar);

	function NavBar() {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			templateUrl: 'App/Directives/navBar.html',
			controller: 'NavBarCtrl',
			controllerAs: 'vm'
		}
	}
})();

(function() {
	'use strict';
	angular.module('wrightApp')
		.controller('NavBarCtrl', NavBarCtrl);

	function NavBarCtrl() {
		var vm = this;


	}
})();