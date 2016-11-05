(function () {
	'use strict';

	angular.module('MenuCategories')
	.component('categoryList', {
		template: '<ul>	<li ng-repeat="item in $ctrl.items"><a ui-sref="items({category: item.short_name})">{{item.name}}</a></li></ul>',
		bindings: {
			items: '<'
		}
	});

	
	
})();