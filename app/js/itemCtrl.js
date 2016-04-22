onlineClothingStoreApp.controller('ItemCtrl', function ($scope, $routeParams, Service, $cookieStore) {
	$scope.childScope = {};
	$scope.amount = 0;
	var quantities;
	var itemId = $routeParams.itemId;
	Service.getItem.get({"id":itemId}, function(data){
		$scope.item=data;
		quantities = $scope.item.Quantities;
	});
	
	$scope.addToCart = function() {
		var item = {'name': $scope.item.Name, 'price': $scope.item.Price, 'amount': $scope.amount};
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
				if ($scope.selectedSize.Size==quantities[i].Size){
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
			if ($scope.selectedSize.Size==quantities[i].Size && $scope.selectedColor==quantities[i].Color){
				n+=1;
			}
		}
		$scope.amount=n;
	}
});