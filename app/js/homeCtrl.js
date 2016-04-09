onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service) {
	$scope.category=Service.getCategory();
	Service.getItem.get(function(data){
		console.log(data);
	});

	Service.getItems.get(function(data){
		console.log(data);
	});
});