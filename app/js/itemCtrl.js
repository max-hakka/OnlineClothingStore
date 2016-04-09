onlineClothingStoreApp.controller('ItemCtrl', function ($scope, $routeParams, Service) {
	var itemId = $routeParams.itemId;
	$scope.amount = 1;
	Service.getItem.get({"id":itemId}, function(data){
		$scope.item=data;
		console.log(data);
	});

	$scope.addToCart = function() {
		var item = {'name': $scope.item.Name, 'price': $scope.item.Price, 'amount': $scope.amount};
		Service.addToCart(item);
		$scope.itemsAmount=$scope.itemsAmount+1;
	}
});