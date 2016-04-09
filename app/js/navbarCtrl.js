onlineClothingStoreApp.controller('NavbarCtrl', function ($scope, Service) {
	$scope.itemsAmount=Service.getCart().length;

	function updateStatus(){
		if(Service.authData){
			var data = Service.getProfile();
			console.log(data);
			data.promise.then(function(res){
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
	updateStatus();

	$scope.logOut = function(){
		Service.logOut();
		updateStatus();
	}
});