onlineClothingStoreApp.controller('ProfileCtrl', function ($scope, Service) {
	var data = Service.getProfile();
	data.promise.then(function(res){
		$scope.full_name = res.personalDetails.fname + ' ' + res.personalDetails.lname;
		$scope.fname = res.personalDetails.fname;
		$scope.lname = res.personalDetails.lname;
		$scope.mobile = res.personalDetails.mobile;
		$scope.email = res.personalDetails.email;
		$scope.co = res.shippingAddress.co;
		$scope.street = res.shippingAddress.street;
		$scope.postalCode = res.shippingAddress.postalCode;
		$scope.city = res.shippingAddress.city;
		$scope.orders = res.orders;
		for (key in $scope.orders){
			$scope.totalCost = Service.calTotalCost($scope.orders[key].items);
		}
		
	});
});