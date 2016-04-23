onlineClothingStoreApp.controller('NavbarCtrl', function ($scope, Service) {
	$scope.menuIcon = "images/menu-icon.png";
	$scope.itemsAmount=Service.getCart().length;

	var parentScope = $scope.$parent.$parent;
	parentScope.childScope = $scope;

	function authDataCallback(authData){
		if(authData){
			var profileData = Service.getProfile();
			profileData.promise.then(function(res){
				$scope.full_name = res.personalDetails.fname + ' ' + res.personalDetails.lname;
				console.log($scope.full_name);
			});
			$scope.loggedIn=true;
			console.log($scope.loggedIn);
			$scope.notLoggedIn=false;
			$(".shopping_cart").css("margin-right", "15px");
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
		$(".shopping_cart").css("margin-right", "0px");
	}

	$scope.toggleDMenu = function(event) {
		var container = $("#dropdownMenu");
		var icon = $(event.target);
		if(container.css("display") == "none"){
			container.css("display", "block");
			icon.css("background-image", "url(images/menu-icon-gray.png)");
		}else{
			container.css("display", "none")
			icon.css("background-image", "url(images/menu-icon.png)");
		}
	}
});