onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service) {
	Service.getItem.get(function(data){
		console.log(data);
	});

	Service.getItems.get(function(data){
		$scope.category=data;
		console.log(data);
	});
});