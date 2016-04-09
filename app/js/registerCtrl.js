onlineClothingStoreApp.controller('RegisterCtrl', function ($scope, Service) {
	
	$scope.createProfile = function(){
		var authentication = {email: $scope.email, password: $scope.password};
		var pDetails = {fname: $scope.fname, lname: $scope.lname, mobile: $scope.mobile};
		var address = {co: $scope.co, street: $scope.street, postalCode: $scope.postalCode, city: $scope.city};
		var data = {personalDetails: pDetails, shippingAddress: address};
		Service.createProfile(authentication, data);
	}
});