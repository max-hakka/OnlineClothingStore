onlineClothingStoreApp.controller('SearchCtrl', function ($scope, Service, $cookieStore, $controller) {
	$controller('HomeCtrl', {$scope:$scope});
	$scope.searchQuery=$cookieStore.get("query");
	$scope.searchResult=$scope.getItems("keyword", $scope.searchQuery);
});