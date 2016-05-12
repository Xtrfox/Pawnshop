angular.module('Pawn.services')
  .service('CustomerService', function($q, $http) {
    this.createCustomer = function(data) {
      var d = $q.defer();
      $http({
        method: 'POST',
        url: '/customers/create',
        data: data
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.getAllCustomer = function() {

      var d = $q.defer();
      $http({
        method: 'GET',
        url: '/customers/all_customers'
      }).success(function(data){
        d.resolve(data);
      });

      return d.promise;
    }

    this.getCustomer = function(id) {

      var d = $q.defer();
      $http({
        method: 'GET',
        url: '/customers/' +id,
      }).success(function(data) {
        d.resolve(data);
      });
      return d.promise;
    }


});
