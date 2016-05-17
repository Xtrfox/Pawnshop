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

    if($state.$current.includes["customer.settle"] === true) {
      CustomerService.getTransaction($stateParams.transaction_id)
      .then(function(d){
        console.log(d)
      })
    }

    CustomerService.get_all_transactions(2)
    .then(function(d){
      console.log(d)
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



  $scope.totaldays = 31;

  $scope.days = [];
  for (var i = 0; i < $scope.totaldays; i+=1) {
    $scope.days.push({value: i+1, day: i + 1});
  }

  $scope.totalyears = 100;

  $scope.years = [];
  for (var i = 2017; i > 2017 - $scope.totalyears; i--) {
    $scope.years.push({value: i-1, year: i - 1});
  }

  $scope.months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' }
  ];

  convertDate = function(d,m,y) {
    dateconvert = m+'-' + d + '-' + y
    dat = new Date(dateconvert)
    return(dat)
  }

  $scope.clickedExtend = function(item) {
    date = convertDate(item.day.value,item.month.value, item.year.value)
    data = {
      item_id: item.id,
      date: date
    }
    CustomerService.extend(data)
    .then(function(d){
      $state.go($state.current, {}, {reload: true});
    })
  }

  $scope.clickedSettle = function(customer) {

    $scope.checkedcustomer = customer;
    data = {
      "customer_id": $stateParams.customer_id,
      "item": item_ids.split(','),
      "total": $scope.total_amount,
      "paid_amount": $scope.amount,
    }

    CustomerService.settle(data)
    .then(function(d){
      $scope.d = d
      console.log(d.transaction.id);
      $state.go('customer.settle', {transaction_id: d.transaction.id});
    })
  }




    // frontend - controller.js
    // controller -service
    // service - routes
    // routes - controller.rb
    // controller.rb - pg


});
