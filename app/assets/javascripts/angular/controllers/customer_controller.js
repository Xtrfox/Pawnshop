angular.module('Pawn.controllers')
  .controller('CustomerController',
  ['$scope', '$state', 'CustomerService',
    function($scope, $state, CustomerService) {

    $scope.totaldays = 31;

    $scope.days = [];
    for (var i = 0; i < $scope.totaldays; i+=1) {
      $scope.days.push({value: i+1, day: i + 1});
    }

    $scope.totalyears = 100;

    $scope.years = [];
    for (var i = 2020; i > 2020 - $scope.totalyears; i--) {
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

    CustomerService.getAllCustomer()
    .then(function(d){
      console.log(d)
    })

    $scope.submitForm= function(data) {
      items = []
      _.each($scope.items, function(e, i, l) {
        convertedPawnDate = convertDate(e.day.day, e.month.value, e.year.value);
        convertedDueDate = convertDate(e.dayDue.day, e.monthDue.value, e.yearDue.value);
        item = {
          "amount": e.amount,
          "category": e.category,
          "description": e.description,
          "pawnDate": convertedPawnDate,
          "dueDate": convertedDueDate,
          "riskLevel": e.riskLevel
        }
        items.push(item)
      });
      convertedBirthDate = convertDate($scope.customer.day.day, $scope.customer.month.value, $scope.customer.year.value);
      data = {
        "first_name": $scope.customer.firstName,
        "last_name": $scope.customer.lastName,
        "middle_initial": $scope.customer.middleInitial,
        "bday": convertedBirthDate,
        "street_address_1": $scope.customer.line1,
        "street_address_2": $scope.customer.line2,
        "postal_code": $scope.customer.postalcode,
        "city": $scope.customer.city,
        "mobile": $scope.customer.mobile,
        "landline": $scope.customer.landline,
        "items": items
      }

      CustomerService.createCustomer(data)
      .then(function(d){
        console.log(d)
      })
      $state.go('manage');
    }
  }]);
