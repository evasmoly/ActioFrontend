//JQuery
//Get Events from rest service
var Event;
function EventModel()
{
	$.ajax(
			{
				url : 'http://localhost:8080/eventmanagement/rest/events',
				type : 'GET',
				async : false,
				success : function(event)
				{
					Event = event;
				},
				error : function(e)
				{
					alert("failure" + e);
				}
			});
};





// Angular.js

/*var appModule = angular.module("appModule", []);

appModule.factory('eventsFactory', function($http) {
	 return{
	    getEvents : function() {
	        return $http({
	            url: 'http://localhost:8080/eventmanagement/rest/events',
	            method: 'GET'
	        });
	    }
	 };
	});

appModule.controller('EventCtrl', function($scope, $location, $http, eventsFactory) {
    $scope.events = [];
    eventsFactory.getEvents()
    		.success(function(data)
    			{
    				$scope.events = data;
    			})
    		.error(function(data,status)
    			{
    				alert("Error: " + status);	
    			});
    $scope.update = function (date)
    {
    	$scope.events.date = date;
    };
});





*/