Pawn.controller('IndexController',
  ['$scope', '$state', 'CustomerService', '$location', '$stateParams',
  function($scope, $state, CustomerService, $location, $stateParams) {

    $scope.add = function() {
      $scope.items.push({'id':$scope.id, 'category': $scope.category, 'description': $scope.description,
      'riskLevel': $scope.riskLevel, 'amount': $scope.amount});
      $scope.id = '';
      $scope.category = '';
      $scope.description = '';
      $scope.riskLevel = '';
      $scope.amount = '';
    }

    CustomerService.allItem()
    .then(function(data){
      console.log(data);

      angular.forEach(data, function(data) {
        if (data.risk_level == 0.015) {
          data.risk_level = "Low"
        }
        else if(data.risk_level == 0.035) {
          data.risk_level = "Medium"
        }
        else if(data.risk_level == 0.0575) {
          data.risk_level = "High"
        }
        else {
          data.risk_level = "Very High"
        }

      });
      $scope.items = data;

    })


}]);
