angular.module('Pawn.services')
  .service('DemoService', function($http) {

    this.customers = function() {
      return [
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Leo Lope",
          "last_name":"Lofranco",
          "mobile": "09997774433",
          "item_no": "222",
          "description": "4448899",
          "amount": "3000",
          "status": "Active",
          "date_added": "06/15/2014"
        },
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Paolo",
          "last_name":"Agloro",
          "mobile": "09997774433",
          "item_no": "222",
          "description": "4448899",
          "amount": "1000",
          "status": "Expired",
          "date_added": "06/15/2014"
        },
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Life Lofranco",
          "last_name":"Lofranco",
          "mobile": "09997774433",
          "item_no": "222",
          "description": "4448899",
          "amount": "2000",
          "status": "Active",
          "date_added": "06/15/2014"
        },
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Leo Lope",
          "last_name":"Lofranco",
          "mobile": "09997774433",
          "item_no": "222",
          "description": "4448899",
          "amount": "4000",
          "status": "Expired",
          "date_added": "06/15/2014"
        },
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Leo Lope",
          "last_name":"Lofranco",
          "mobile": "09997774433",
          "item_no": "222",
          "description": "4448899",
          "amount": "5000",
          "status": "Active",
          "date_added": "06/15/2014"
        }
      ];
    };
  });
