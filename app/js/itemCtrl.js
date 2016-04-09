onlineClothingStoreApp.controller('ItemCtrl', function ($scope, Service) {
	Service.getItem.get(function(data){
		$scope.item=data;
		console.log(data);
	});
});