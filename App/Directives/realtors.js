
(function() {
	'use strict';
	angular.module('wrightApp').directive('realtorList', RealtorList);

	function RealtorList() {
		return {
			restrict: 'E',
			replace: true,
			scope: {},
			templateUrl: 'App/Directives/realtors.html',
			controller: 'RealtorCtrl',
			controllerAs: 'vm'
		}
	}
})();

(function() {
	'use strict';
	angular.module('wrightApp')
		.controller('RealtorCtrl', RealtorCtrl);

	function RealtorCtrl() {
		var vm = this;

		vm.realtors = [];
		vm.realtors = [{
				id: '0',
				name: 'Walter Wright',
				title: 'Broker/Owner',
				phone: '601-508-1282',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'WalterWright@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/10408893_369322776548808_6027193656438816215_n.jpg?oh=48c46234300312c52bc3579f05843d21&oe=54BB0366&__gda__=1422403567_65d7e5981c256803847e51ac2267b907'
			}, {
				id: '1',
				name: 'Tina Wright',
				title: 'Realtor',
				phone: '601-466-5201',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'TinaWright@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10626542_369322793215473_9183508081247383547_n.jpg?oh=3507afdc00f686fec0427b89ac1e73df&oe=54B9687D&__gda__=1422762401_780431f92f70e2ae164631ead8ebfdd3'
			}, {
				id: '2',
				name: 'Karen Wright',
				title: 'Realtor',
				phone: '601-508-2514',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'KarenWright@WrightRealtyMS.com',
				photoURL: 'https://scontent-a-dfw.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/10551112_369322726548813_1855524398525593095_n.jpg?oh=9ceff4ff43a0c6b185d352662ab2f3c7&oe=54CFFCE9'
			}, {
				id: '3',
				name: 'Lloyd Cooley',
				title: 'Realtor',
				phone: '601-508-7351',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'LloydCooley@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10632627_369322599882159_5079882747358236396_n.jpg?oh=9236af6b0d43087bece06ce0a76e6919&oe=54C74D9F&__gda__=1421631811_b39e0cc34b6a928859747fcf7e63cba4'
			}, {
				id: '4',
				name: 'Gaylynn Roach',
				title: 'Realtor',
				phone: '228-238-7057',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'GaylynnRoach@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/10405473_369322749882144_2383739872824220020_n.jpg?oh=d1bc18cd4ffa2a25212b8f585e62425d&oe=54C51410&__gda__=1421245864_38b5c3776e83782eb98b0a6a270e3758'
			}, {
				id: '5',
				name: 'LeAnne Murry',
				title: 'Realtor',
				phone: '601-508-6436',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'LeAnneMurry@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10609587_369322766548809_1787846493093038349_n.jpg?oh=9862edcf0cee383c3f40061af838e656&oe=54AC4642&__gda__=1422842355_cbcf97f3c153c8134ba5f1edcfea0fd7'
			}, {
				id: '6',
				name: 'Chris West',
				title: 'Realtor',
				phone: '228-475-0513',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'ChrisWest@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/10606318_369322706548815_2957408886976317566_n.jpg?oh=fd6dc172732bf18cd2e4a3083e4edf2a&oe=54D0B4FB&__gda__=1421351057_91aa9a1ecfa9ccd868d9c1f4b12e34d9'
			}, {
				id: '7',
				name: 'Janie Grice',
				title: 'Realtor',
				phone: '601-508-5322',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'JanieGrice@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10527746_369322679882151_4965221579961464877_n.jpg?oh=6038e84a3f0b64375e88076608075cdc&oe=54BDBABF&__gda__=1421723235_585e5ec510fd98147390e639964b4ee3'
			}, {
				id: '8',
				name: 'Billy Anderson',
				title: 'Realtor',
				phone: '601-508-4747',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'BillyAnderson@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/16327_369322623215490_8784952868915355453_n.jpg?oh=d5b4e93038fa29ffe68ada201b5ca68d&oe=54B153D0&__gda__=1422655917_03c04266ad6100fe506b41df41fd9e22'
			}, {
				id: '9',
				name: 'Candy Grant',
				title: 'Realtor',
				phone: '601-508-5364',
				office: '601-285-7335',
				fax: '228-588-9414',
				email: 'CandyGrant@WrightRealtyMS.com',
				photoURL: 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/10154556_369322566548829_8386996771341842174_n.jpg?oh=b66e1ce4fc475dfb3790b278f829cf4d&oe=54B47B33&__gda__=1421191042_1a7982b430eaed620cfa6a166f032581'
			},

		]
	}
})();