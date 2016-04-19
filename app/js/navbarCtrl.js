onlineClothingStoreApp.controller('NavbarCtrl', function ($scope, Service) {
	$scope.itemsAmount=Service.getCart().length;

	var parentScope = $scope.$parent.$parent;
	parentScope.childScope = $scope;

	function authDataCallback(authData){
		if(authData){
			var profileData = Service.getProfile();
			profileData.promise.then(function(res){
				$scope.full_name = res.personalDetails.fname + ' ' + res.personalDetails.lname;
			});
			$scope.loggedIn=true;
			$scope.notLoggedIn=false;
		}else{
			$scope.full_name = "";
			$scope.loggedIn=false;
			$scope.notLoggedIn=true;
		}
	}
	
	Service.dataRef.onAuth(authDataCallback);

	$scope.logOut = function(){
		Service.logOut();
		authDataCallback();
	}
});