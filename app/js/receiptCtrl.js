onlineClothingStoreApp.controller('ReceiptCtrl', function ($scope, Service) {
	var data = Service.getOrder("466567574");
	data.promise.then(function(res){
		$scope.items = res.items;
		$scope.orderNr = res.orderNr;
	});
});