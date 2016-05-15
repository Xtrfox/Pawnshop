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
      $scope.data = data;
    })

    if($state.$current.includes["customer"] === true) {
      CustomerService.getCustomer($stateParams.customer_id)
      .then(function(d){
        $scope.customer = d;
      })
    }
    $scope.clickedSettle = function() {

      d = {
        "customer_id": 1,
        "item_ids": [1],
        "service_charge": 10,
        "total": 100,
        "paid_amount": $scope.amount,
      }

      CustomerService.settle(d)
      .then(function(d){
        console.log(d);
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
      $scope.checkedcustomer = customer;
      $state.go('customer.pawn', {customer_id: customer.customer.id});
    };

    $scope.clickedSettle = function(customer) {
      $scope.checkedcustomer = customer;
      $state.go('customer.settle', {customer_id: customer.customer.id});
    };
    // $scope.clickedDone = function() {
    //   $state.transitionTo('manage')
    // }


    // frontend - controller.js
    // controller -service
    // service - routes
    // routes - controller.rb
    // controller.rb - pg


});
