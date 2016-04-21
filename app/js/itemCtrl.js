onlineClothingStoreApp.controller('ItemCtrl', function ($scope, $routeParams, Service, $cookieStore, $q) {
	$scope.childScope = {};
	$scope.colors=["select color"];

	var itemId = $routeParams.itemId;
	$scope.amount = 1;
	Service.getItem.get({"id":itemId}, function(data){
		$scope.item=data;
		console.log(data);
	});
	
	$scope.addToCart = function() {
		var item = {'name': $scope.item.Name, 'price': $scope.item.Price, 'amount': $scope.amount};
		Service.addToCart(item);
		$scope.childScope.itemsAmount=Service.getCart().length;
	}

	$scope.goToHome = function(categoryName) {
		$cookieStore.put("categoryName", categoryName);
	}

	$scope.getColors = function(size){
		alert(size);
		var quantities = $scope.item.Quantities;
		var list = [];
		var result = $q.defer();
		console.log(list);
		for (i=0; i < quantities.length; i++){
			if (size==quantities[i].Size){
				list.push(quantities[i].Color);
			}else if(i == quantities.length-1){
				result.resolve(list);
			}
		}
		$scope.colors=result;
	}
});