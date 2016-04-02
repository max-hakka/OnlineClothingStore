onlineClothingStoreApp.factory('Service',function ($q, $resource, $cookieStore) {
	// Generate a GUID for a new user
	this.GenerateGUID = function() {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
		}
		return s4() + s4() + '-' s4() + '-' s4() + '-' + s4() + '-' + s4() + s4() + s4();
	}

	// Store data for the created profile
	this.CreateProfile = function() {

	}

	// Retrieve profile's data for a given id
	this.GetProfile = function(id) {

	}

	// Get data for items of a given category
	this.GetCategory = $resource('http://../items', {pg:1,rpp:25,api_key:''}, {get:{method:'GET', cache:true}});

	// Get data for an item with a specific id
	this.GetItem = $resource('http://../:id', {api_key:''}, {get:{method:"GET",cache:true}});

	return this;
});