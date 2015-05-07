var home = angular.module('leixiaoyuHome', ['ui.bootstrap']);

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
	return window._;
});

home.controller('uploadController', function($scope, $modal, $log) {
	$scope.openModal = function() {
		var modalInstance = $modal.open({
			animation: true,
			templateUrl: 'modals/upload_modal.html',
			controller: 'uploadModalController', 
			size: 'lg'
		});
	};
});

home.controller('uploadModalController', function($scope, $modalInstance, $log) {
	$scope.ok = function() {
		$modalInstance.close();
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});