onlineClothingStoreApp.controller('EditAccountCtrl', function ($scope, Service, $controller) {
	$controller('ProfileCtrl', {$scope: $scope});

	$scope.updateProfile = function() {
		var pDetails = {fname: $scope.fname, lname: $scope.lname, mobile: $scope.mobile};
		var address = {co: $scope.co, street: $scope.street, postalCode: $scope.postalCode, city: $scope.city};
		var data = {personalDetails: pDetails, shippingAddress: address};
		Service.updateProfile(data);
	}
});