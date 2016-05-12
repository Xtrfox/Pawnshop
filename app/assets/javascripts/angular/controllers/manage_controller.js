Pawn.controller('ManageController',
  function($scope, $state,CustomerService, $location) {
    // $scope.customers = CustomerService.getAllCustomer();
    $scope.showEditDelete = false;
    $scope.selection = "edit";

    _.each($scope.customers, function(e){
      e.checked = false;
    });

    CustomerService.getAllCustomer()
    .then(function(data){
      console.log(data);
      $scope.data = data;
    })

    $scope.triggerShowEditDelete = function() {
      if (_.size(_.filter($scope.customers, function(e) { return e.checked === true; })) > 0) {
        $scope.showEditDelete = true;
      } else {
        $scope.showEditDelete = false;
      }
    };
    $scope.removecustomer = function(){
      checkedcustomers=_.filter($scope.customers, function(e){ return e.checked ===true;});
      $scope.customers = _.difference($scope.customers, checkedcustomers);
    };
    $scope.clickedcustomer = function(customer){
      $scope.checkedcustomer=customer;
      $state.transitionTo('customer.detail')
    };
    $scope.changedSelection = function(sel){
      $scope.selection = sel;
    };
    $scope.clickedsettle = function(customer) {
      $scope.clickedcustomer = customer;
      $state.transitionTo('customer.settle')
    };

    
});
