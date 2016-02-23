weatherApp.directive("weatherReport", function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherReport.html',
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});