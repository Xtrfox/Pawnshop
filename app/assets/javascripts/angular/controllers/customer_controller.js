angular.module('Pawn.controllers')
  .controller('CustomerController', function($scope, $state) {


    $scope.customers=[{id:1}];

    $scope.addNewCustomer= function(){
      var newItemNo = $scope.customers.length+1;
      console.log(newItemNo);
      $scope.customers.push({'id': newItemNo});
    };

    $scope.totaldays = 31;

    $scope.days = [];
    for (var i = 0; i < $scope.totaldays; i+=1) {
      $scope.days.push({value: i+1, day: i + 1});
    }

    $scope.totalyears = 100;

    $scope.years = [];
    for (var i = 2014; i > 2014 - $scope.totalyears; i--) {
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


    $scope.items=[{id:1}];

    $scope.addNewItem= function(){
      var newItem = $scope.items.length+1;
      console.log(newItem);
      $scope.items.push({'id': newItem});
    };



    //
    // this.register = function() {


    $scope.submitForm = function() {
      $scope.submitted = true
      customerdata = {
        "customer_id": $scope.customer.no,
        "first_name": $scope.customer.firstName,
        "last_name": $scope.customer.lastName,
        "middle_initial": $scope.customer.middleInitial,
        "bday": [$scope.customer.month, $scope.customer.day, $scope.customer.year],
        "street_address_1": $scope.customer.line1,
        "street_address_2": $scope.customer.line2,
        "postal_code": $scope.customer.postalcode,
        "city": $scope.customer.city,
        "mobile_number": $scope.customer.mobileNumber,
        "landline": $scope.customer.landline
      }


  //    console.log('as', $scope.item.description);

        itemdata = {
          "category": $scope.item.category,
          "description": $scope.item.description,
          "risk_level": $scope.item.risk_level,
          "amount": $scope.item.amount,
          "pawn_date": $scope.item.pawn_date,
          "due_date": $scope.item.due_date,
        }
         console.log('ss', itemdata);


    }


    //}

    //console.log($scope.teamForm.customer.firstName);




  });
