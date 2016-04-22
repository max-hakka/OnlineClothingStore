onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service, $cookieStore, $location) {
	var category;

	if("undefined" === typeof($cookieStore.get("categoryName"))){
		category = "Featured";
	}else{
		category = $cookieStore.get("categoryName");
	}

	function toggleSlideShow(category){
		if(category=="Featured"){
			$scope.displayedSlide=true;
		}else{
			$scope.displayedSlide=false;
		}
	}

	function changeBGColor(category){
		var selected = $("ul").find(".selected");
		selected.css("background-color", "gray");
		selected.attr("class", "");
		$("#"+category).css("background-color", "black");
		$("#"+category).attr("class", "selected");
	}

	toggleSlideShow(category);
	changeBGColor(category);

	$scope.getItems=function(keyword, query){
		$scope.categoryName = query.toUpperCase();
		var sort = '{"'+keyword+'":"'+query+'"}';
		var a = JSON.parse(sort);
		Service.getItems.get(a, function(data){
			if(keyword == "category"){
				$scope.category=data;
				console.log(data);
			}else{
				$scope.searchResult=data;
				console.log(data);
			}
		});
	}

	$scope.getSearch=function(query){
		$scope.getItems('keyword',query);
		$cookieStore.put("query", query);
		$location.path("/search");
	}
		
	$scope.getItems("category", category);

	$scope.updateCategory = function(category, event){
		event.preventDefault();
		toggleSlideShow(category);
		changeBGColor(category);
		$cookieStore.put("categoryName", category);
		$scope.getItems("category", category);
	}

	$scope.keyUpFunction = function(query) {
		console.log(query);
		if (query.length>1){
			$scope.getItems("keyword", query);
			$scope.keydown=true;
		}
		else if (query==false || query==" "){
			$scope.keydown=false;
		}
	}
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
