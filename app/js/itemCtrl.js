onlineClothingStoreApp.controller('ItemCtrl', function ($scope, $routeParams, Service, $cookieStore) {
	$scope.childScope = {};
	$scope.amount = 0;
	$scope.sizes = ["S", "M", "L"];
	$scope.selectedAmount = 1;
	var quantities;
	var itemId = $routeParams.itemId;
	Service.getItem.get({"id":itemId}, function(data){
		$scope.item=data;
		quantities = $scope.item.Quantities;
	});
	
	$scope.addToCart = function() {
		var item = {'name': $scope.item.Name, 'price': $scope.item.Price, 'size': $scope.selectedSize, 'color': $scope.selectedColor,'amount': $scope.selectedAmount};
		Service.addToCart(item);
		$scope.childScope.itemsAmount=Service.getCart().length;
	}

	$scope.goToHome = function(categoryName) {
		$cookieStore.put("categoryName", categoryName);
	}

	$scope.getColors = function(){
		var quantities = $scope.item.Quantities;
		var list = [];
		if($scope.selectedSize){
			for (i=0; i < quantities.length; i++){
				if ($scope.selectedSize==quantities[i].Size && $.inArray(quantities[i].Color, list)==-1){
					list.push(quantities[i].Color);
				}
			}
			$scope.colors=list;
		}else{
			$scope.colors=undefined;
		}
	}

	$scope.getAmount = function(){
		console.log($scope.selectedColor);
		var n = 0;
		for (i=0; i < quantities.length; i++){
			if ($scope.selectedSize==quantities[i].Size && $scope.selectedColor==quantities[i].Color){
				n=quantities[i].Quantity;
			}
		}
		$scope.amount=n;
	}
});