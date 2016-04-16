onlineClothingStoreApp.controller('LogInCtrl', function ($q, $scope, $location, Service) {
	$scope.status = "";

	$scope.logIn = function(){
		var loginData = {email: $scope.email, password: $scope.password};
		Service.logIn(loginData, function(res){
			if (res === 'success') {
				$location.path('/home');
				$scope.$apply();
			}else {
			  	console.log("User is logged out");
			}
		});		
	}
});