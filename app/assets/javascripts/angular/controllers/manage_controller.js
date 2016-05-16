Pawn.controller('ManageController',
  function($scope, $state,CustomerService, $location, $stateParams, $cookies) {
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
    $scope.clickedSettle = function(customer) {

      $scope.checkedcustomer = customer;
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

      $state.go('customer.settle', {customer_id: customer.customer.id});

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

    CustomerService.allItem()
    .then(function(data){
      $scope.items_all = data;
    })
    pro_checked_items = []

    $scope.selected =
    {
      ids: {"1": false}
    };

    $scope.choose = function() {
    checked_items = []

    c=Object.keys($scope.selected.ids)
    .filter(function(k){return $scope.selected.ids[k]})
    .map(Number)

    _.each(c, function(el, i,l) {
      checked_item = _.filter($scope.items_all, function(m) { return m.id == el})
      checked_items.push(checked_item)
    })

    pro_checked_items = _.flatten(checked_items)
  }

    $scope.clickedGenerate = function(customer) {
      $scope.checkedcustomer = customer;

      item_ids = []

     _.each(pro_checked_items, function(el, i,l) {
       item_ids.push(el.id)
     })
     $cookies.put('item_ids', item_ids);
     $state.go('customer.pawn')
    };

    if($state.$current.includes["customer.pawn"] === true || $state.$current.includes["customer.settle"] === true ) {
      item_ids = $cookies.get('item_ids')
      data = {
        customer_id: $stateParams.customer_id,
        item_ids: item_ids.split(',')
      }

      CustomerService.postItems(data)
      .then(function(data){
        $scope.pawn = data
        console.log(data)

        interests = []
        total = 0
        service_charge = .20

        angular.forEach(data.item, function(data) {
          data.interest = data.amount * data.risk_level
          total += data.amount + data.interest
          interests.push(data.interest)
        });
        $scope.pawn.item.interests = interests;
        $scope.total = total
        $scope.service_charge = total * service_charge
        $scope.total_amount = total + total * service_charge
        $scope.number_items = data.item.length


      })

  }




    // frontend - controller.js
    // controller -service
    // service - routes
    // routes - controller.rb
    // controller.rb - pg


});
