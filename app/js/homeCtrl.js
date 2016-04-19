onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service, $cookieStore) {
	var category;
	if("undefined" === typeof($cookieStore.get("categoryName"))){
		category = "Features";
	}else{
		category = $cookieStore.get("categoryName");
	}

	function getItems(category){
		$scope.categoryName = category.toUpperCase();
		Service.getItems.get({"category":category}, function(data){
			$scope.category=data;
		});
	}

	$scope.updateCategory = function(category, event){
		$cookieStore.put("categoryName", category);
		event.preventDefault();
		getItems(category);
	}

	getItems(category);

		
});

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [], x = -1;
images[0] = "http://www.1983fashion.com/images/banner_aug13.png";
images[1] = "http://modernretail.com/wp-content/uploads/2014/11/shopify-shopping-features-v3-1.png";
images[2] = "https://www.demoup.com/blog/wp-content/uploads/2015/11/online_shop-_features_wishlist.jpg";
images[3] = "http://carneyteam.com/wp-content/uploads/2015/12/6_-Online-Shop.jpg";
