onlineClothingStoreApp.controller('CartCtrl', function ($scope, Service) {
	var items = Service.getCart();
	var orderNr = Service.generateGUID();
	var d = new Date();
	var date = d.getDate()+"-"+d.getMonth()+'-'+d.getFullYear()+'T'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	$scope.cart = {'orderNr': orderNr, 'date': date, 'shipped': 'Ongoing', 'items': items};

	$scope.saveOrders = function() {
		Service.saveOrders($scope.cart);
	}
});