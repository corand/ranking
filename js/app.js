var emaitzak = angular.module('emaitzak',[]);

emaitzak.controller('MainCtrl', function($scope, $http) {
  $scope.aukeratua = "";
  $http.get('js/ranking_masculino.json')
	.then(function(res){
	  $scope.ranking_masculino = res.data;                
	});

    $scope.aukeratuFroga = function(){
    	console.log($scope.froga);
    	$scope.emaitzak = $scope.froga;
    };
});