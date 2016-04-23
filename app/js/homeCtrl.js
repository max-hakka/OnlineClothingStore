onlineClothingStoreApp.controller('HomeCtrl', function ($scope, Service, $cookieStore, $location) {
	var category;
	$scope.displayedArrows=false;

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
			}else{
				$scope.searchResult=data;
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
		if (query.length>0){
			$scope.getItems("keyword", query);
			$("#search-input-frame").show();
		}
		else if (query==false || query==" "){
			$("#search-input-frame").hide();
		}
	}

	$scope.showArrows = function(){
		$scope.displayedArrows=true;
	}
	$scope.hideArrows = function(){
		$scope.displayedArrows=false;
	}

	$scope.displayNextImage = function() {
	    x = (x === images.length - 1) ? 0 : x + 1;
	    document.getElementById("img").src = images[x].imageUrl;
	}

	$scope.displayPreviousImage = function() {
	    x = (x <= 0) ? images.length - 1 : x - 1;
	    document.getElementById("img").src = images[x].imageUrl;
	}

	function startTimer() {
	    setInterval($scope.displayNextImage, 3000);
	}

	var images, x = -1;
	
	Service.getItems.get({"category":"slideshow"}, function(res){
		images = res.data;
		startTimer();
	});

});