onlineClothingStoreApp.controller('CartCtrl', function ($scope, Service, $location) {
	var items = Service.getCart();
	var orderNr = Service.generateGUID();
	var d = new Date();
	var date = d.getDate()+"-"+d.getMonth()+'-'+d.getFullYear()+'T'+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	$scope.cart = {'orderNr': orderNr, 'date': date, 'shipped': 'Ongoing', 'items': items};

	$scope.saveOrders = function(event) {
		event.preventDefault();
		if (Service.authData){
			Service.saveOrders($scope.cart);
			Service.emptyCart();
			$location.path('/receipt/'+orderNr);
		}else{
			$location.path('/login');
		}
		
	}

	$scope.removeItem = function(event) {
		var item = event.target.dataset.item;
		var itemObj = JSON.parse(item);
		Service.deleteFromCart(itemObj);
		$scope.cart.items = Service.getCart();
		$scope.getTotalCost();
	}

	$scope.getTotalCost = function(){
		var items = Service.getCart();
		return Service.calTotalCost(items);
	}
});