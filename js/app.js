var emaitzak = angular.module('emaitzak',[]);

emaitzak.controller('MainCtrl', function($scope, $http) {
  $scope.greeting = 'Hola!';
  $scope.aukeratua = "";
  $http.get('js/emaitzak.json')
	.then(function(res){
	  $scope.frogak = res.data;                
	});

    $scope.aukeratuFroga = function(emaitza){
    	$scope.emaitzak = emaitza;
    	$scope.aukeratua = emaitza.prueba;
    };
});