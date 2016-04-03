onlineClothingStoreApp.controller('RegisterCtrl', function ($scope, Service) {
	var pDetails = {fname: $scope.fname, lname: $scope.lname, mobile: $scope.mobile, email: $scope.email, password: $scope.password};
	var address = {co: $scope.co, street: $scope.street, postalCode: $scope.postalCode, city: $scope.city};
	var data = {personalDetails: pDetails, shippingAddress: address};

	$scope.createProfile = function(){
		Service.createProfile(data);
	}
});