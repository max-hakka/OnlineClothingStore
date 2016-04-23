 onlineClothingStoreApp.controller('RegisterCtrl', function ($scope, Service, $location) {
	$scope.co = "-";
	$scope.valid = false;
	$scope.createProfile = function(myForm){
		if(!myForm.$valid){
			$scope.valid = true;
		}else{
			$scope.valid = false;
			var authentication = {email: $scope.email, password: $scope.password};
			var pDetails = {fname: $scope.fname, lname: $scope.lname, mobile: $scope.mobile, email: $scope.email};
			var address = {co: $scope.co, street: $scope.street, postalCode: $scope.postalCode, city: $scope.city};
			var data = {personalDetails: pDetails, shippingAddress: address};
			Service.createProfile(authentication, data);
			$location.path('/home');
		}		
	}
});