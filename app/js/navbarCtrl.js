onlineClothingStoreApp.controller('NavbarCtrl', function ($scope, Service) {
	$scope.menuIcon = "images/menu-icon.png";
	$scope.dMenuDisplayed = false;
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
		$scope.dMenuDisplayed = false;
	}

	$scope.toggleDMenu = function(event) {
		if($scope.dMenuDisplayed == false){
			$scope.dMenuDisplayed = true;
			$(event.target).css("background-image", "url(images/menu-icon-gray.png)");
		}else{
			$scope.dMenuDisplayed = false;
			$(event.target).css("background-image", "url(images/menu-icon.png)");
		}
	}
});