onlineClothingStoreApp.controller('SearchCtrl', function ($scope, Service, $cookieStore) {
	$scope.searchQuery=$cookieStore.get("query");
	$scope.searchResult=$cookieStore.get("searchResult");
});