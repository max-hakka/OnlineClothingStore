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

	// Get data for items of a given category
	this.getCategory = $resource('http://../items', {pg:1,rpp:25,api_key:''}, {get:{method:'GET', cache:true}});

	// Get data for an item with a specific id
	this.getItem = $resource('http://../:id', {api_key:''}, {get:{method:"GET",cache:true}});

	return this;
});