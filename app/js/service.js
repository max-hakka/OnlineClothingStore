onlineClothingStoreApp.factory('Service',function ($q, $resource, $cookieStore) {

	// Create a reference to the Firebase database
	var myDataRef = new Firebase('https://clothing-store.firebaseio.com/');
	var usersRef = myDataRef.child("users");
	var userID = "Ah Zau Marang";

	// Retrieve data from given address from firebase database
	function retrieveData(address) {
		var result = $q.defer();
		var ref = usersRef.child(address);
		ref.once("value", function(responce) {
			var data = responce.val();
			result.resolve(data);
		});
		return result;
	}
	if("undefined" === typeof($cookieStore.get("items"))){
		$cookieStore.put("items", []);
	}

	// Save orders
	this.saveOrders = function(data) {
		var orderRef = usersRef.child(userID+"/orders/"+data.orderNr);
		orderRef.set(data);
	}

	// Retrieve data for given order number
	this.getOrder = function(id) {
		return retrieveData(userID+"/orders/"+id);
	}

	// // Generate a GUID for a new user
	// this.generateGUID = function() {
	// 	function s4() {
	// 		return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	// 	}
	// 	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
	// }

	// Store user object under "users" into Firebase database
	this.createProfile = function(data) {
		var user = usersRef.child(data.personalDetails.fname + ' ' + data.personalDetails.lname);
		user.set(data);
	}

	// Retrieve profile's data for a given id
	this.getProfile = function() {
		return retrieveData(userID);
	}

	// Update profile
	this.updateProfile = function(data) {
		var user = usersRef.child(userID);
		user.update(data);
	}
	this.addToCart =function(item){
		items=$cookieStore.get("items");
		items.push[item];
		$cookieStore.put("items", items);
	}

	this.deleteFromCart =function(item){
		items=$cookieStore.get("items");
		for (key in items){
			if (item.Id = items[key].Id){
				items.splice(key,1);
			};
		};			
		$cookieStore.put("items", items);

	}
	this.getCart=function(){
		$cookieStore.get("items");
	}
	this.getCategory=function(){
		return {items:[{'Image':'https://image.spreadshirtmedia.net/image-server/v1/products/118898654/views/1,width=378,height=378,appearanceId=39,version=1447077209/Ansikte-smiley-30-roliga-serier-T-shirts.png', 'Title':'Orange T-Shirt', 'Price':'100 SEK', 'Id':'1'},{'Image':'http://pngimg.com/upload/tshirt_PNG5434.png', 'Title':'White T-Shirt', 'Price':'50 SEK', 'Id':'2'},{'Image':'https://cdn.qwertee.com/images/mens-black.png', 'Title':'Black T-Shirt', 'Price':'75 SEK', 'Id':'3'}]};
	};
	// Get data for items of a given category
	//this.getCategory = $resource('http://../items', {pg:1,rpp:25,api_key:''}, {get:{method:'GET', cache:true}});

	// Get data for an item with a specific id
	this.getItem = $resource('http://../:id', {api_key:''}, {get:{method:"GET",cache:true}});

	return this;
});