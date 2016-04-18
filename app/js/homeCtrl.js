onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service, $cookieStore) {
	var category;
	if("undefined" === typeof($cookieStore.get("categoryName"))){
		category = "Features";
	}else{
		category = $cookieStore.get("categoryName");
	}

	function getItems(category){
		$scope.categoryName = category.toUpperCase();
		Service.getItems.get({"category":category}, function(data){
			$scope.category=data;
		});
	}

	$scope.updateCategory = function(category, event){
		$cookieStore.put("categoryName", category);
		event.preventDefault();
		getItems(category);
	}

	getItems(category);
});