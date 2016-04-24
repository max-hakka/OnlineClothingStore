onlineClothingStoreApp.controller('CartCtrl', function ($scope, Service, $location) {
	var items = Service.getCart();
	var orderNr = Service.generateGUID();
	var d = new Date();
	var h = d.getHours() + "0";
	var m = d.getMinutes() + "0";
	var s = d.getSeconds() + "0";
	var date = d.getDate()+"-"+d.getMonth()+'-'+d.getFullYear()+'T'+h.substr(0,2)+':'+m.substr(0,2)+':'+s.substr(0,2);
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