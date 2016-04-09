onlineClothingStoreApp.controller('ItemCtrl', function ($scope, $routeParams, Service) {
	var itemId = $routeParams.itemId;
	Service.getItem.get({"id":itemId}, function(data){
		$scope.item=data;
		console.log(data);
	});
});