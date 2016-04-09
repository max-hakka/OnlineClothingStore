onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service) {
	
	$scope.updateCategory = function(category, event){
		event.preventDefault();
		$scope.categoryName = category.toUpperCase();
		Service.getItems.get({"category":category}, function(data){
			$scope.category=data;
			console.log(data);
		});
	}

	$scope.updateCategory("Womens", event);
});