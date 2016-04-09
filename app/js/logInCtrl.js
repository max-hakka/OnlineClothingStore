onlineClothingStoreApp.controller('LogInCtrl', function ($scope, Service) {
	$scope.status = "";

	$scope.logIn = function(){
		var authentication = {email: $scope.email, password: $scope.password};
		Service.logIn(authentication, function(){});
	}
});