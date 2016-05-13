Pawn.controller('ManageController',
  function($scope, $state,CustomerService, $location, $stateParams) {
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

    if($state.$current.includes["customer.detail"] === true) {
      CustomerService.getCustomer($stateParams.customer_id)
      .then(function(d){
        console.log(d)
      })
    }



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
      $state.go('customer.detail', {customer_id: customer.customer.id});
    };
    $scope.changedSelection = function(sel){
      $scope.selection = sel;
    };
    $scope.clickedGenerate = function(customer) {
      $scope.clickedcustomer = customer;
      $state.transitionTo('customer.pawn')
    };
    $scope.clickedSettle = function(customer) {
      $scope.clickedcustomer = customer;
      $state.transitionTo('customer.settle')
    }
    // $scope.clickedDone = function() {
    //   $state.transitionTo('manage')
    // }


    // frontend - controller.js
    // controller -service
    // service - routes
    // routes - controller.rb
    // controller.rb - pg


});
