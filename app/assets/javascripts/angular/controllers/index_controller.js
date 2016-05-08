angular.module('Pawn.controllers')
  .controller('IndexController', function($scope) {

    $scope.items = [
      { 'id': '1',
        'category': 'Jewelry',
        'description': 'Gold ring',
        'riskLevel': 'High',
        'amount': '500' },
        { 'id': '2',
          'category': 'Jewelry',
          'description': 'Gold ring with 1 carat diamond',
          'riskLevel': 'Very High',
          'amount': '30000' },
        { 'id': '3',
          'category': 'Jewelry',
          'description': 'Gold Ring',
          'riskLevel': 'Medium',
          'amount': '5000'},

    ];
    $scope.add = function() {
      $scope.items.push({'id':$scope.id, 'category': $scope.category, 'description': $scope.description,
      'riskLevel': $scope.riskLevel, 'amount': $scope.amount});
      $scope.id = '';
      $scope.category = '';
      $scope.description = '';
      $scope.riskLevel = '';
      $scope.amount = '';
    }


});
