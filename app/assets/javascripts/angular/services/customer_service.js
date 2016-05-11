angular.module('Pawn.services')
  .service('CustomerService', function($q, $http) {
    this.createCustomer = function(data) {
      var d = $q.defer();
      $http({
        method: 'POST',
        url: '/customer/create',
        data: data
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

});
