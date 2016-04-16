onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service) {
	$scope.categoryName = "FEATURES";
	function getItems(category){
		Service.getItems.get({"category":category}, function(data){
			$scope.category=data;
		});
	}

	$scope.updateCategory = function(category, event){
		event.preventDefault();
		$scope.categoryName = category.toUpperCase();
		getItems(category);
		
	}

	getItems("Womens");
});