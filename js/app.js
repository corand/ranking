var emaitzak = angular.module('emaitzak',[]);

emaitzak.controller('MainCtrl', function($scope, $http) {
  var ranking_masculino,
  	  ranking_femenino;
  
  $http.get('js/ranking_masculino.json')
	.then(function(res){
	  ranking_masculino = res.data;            
	});

  $http.get('js/ranking_femenino.json')
  	.then(function(res){
  		ranking_femenino = res.data;
  	});

    $scope.aukeratuFroga = function(){
    	$scope.emaitzak = $scope.froga;
    };

    $scope.generoChange = function(){
    	$scope.ranking = ($scope.genero === "Masculino") ? ranking_masculino : ($scope.genero === "Femenino") ? ranking_femenino : null;
    };
});