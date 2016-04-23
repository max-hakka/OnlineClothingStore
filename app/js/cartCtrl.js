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
			$location.path('/receipt');
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
		var totalCost = 0;
		for(key in items){
			totalCost = totalCost + parseInt(items[key].price)*parseInt(items[key].amount);
		}
		return totalCost;
	}
});