onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service) {
	$scope.category=Service.getCategory();
});