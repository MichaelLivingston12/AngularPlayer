var myApp = angular.module("myApp", []).config(function($sceProvider) {
$sceProvider.enabled(false);

});

myApp.controller('MyController', ['$scope', '$http', function MyController($scope, $http) {

$http.get('js/data.json').success(function(data)  {
$scope.tracks = data; 

});

$scope.activeSong = 0;

}]);