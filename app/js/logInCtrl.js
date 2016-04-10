onlineClothingStoreApp.controller('LogInCtrl', function ($q, $scope, $location, Service) {
	$scope.status = "";

	$scope.logIn = function(){
		var authentication = {email: $scope.email, password: $scope.password};

		var response = $q.defer();
		Service.logIn(authentication, function(res){
			response.resolve(res);
		});
		console.log(response);
		response.promise.then(function(res){
			if (res === 'success') {
				$location.path('/home');
				//$scope.$apply();
			}else {
			  	console.log("User is logged out");
			}
		});
		
	}
});