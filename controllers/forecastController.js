weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 2;

	$scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

	$scope.$watch('city', function() {
		cityService.city = $scope.city;
	});

	//console.log($scope.weatherResult);

	$scope.convertToFahrenheit = function(degK) { 
        return Math.round((1.8 * (degK - 273)) + 32);
    };

    $scope.convertToDate = function(dt) { 
        return new Date(dt * 1000);  
    };

}]);