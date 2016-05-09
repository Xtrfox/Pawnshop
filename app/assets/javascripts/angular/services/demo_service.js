angular.module('Pawn.services')
  .service('DemoService', function($http) {

    this.customers = function() {
      return [
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Leo Lope",
          "last_name":"Lofranco",
          "city": "Mandaluyong",
          "mobile": "09997774433",
          "landline": "4448899",
          "birth_date": "January 1, 1960",
          "date_added": "06/15/2014"
        },
        {
          "id":2,
          "customer_id":"32199",
          "department": "Legal",
          "first_name":"Francis",
          "last_name":"Plaza",
          "perk_used":"34",
          "date_added":"06/25/2014"
        },
        {
          "id":3,
          "customer_id":"123459",
          "department": "R and D",
          "first_name":"Life",
          "last_name":"Lofranco",
          "perk_used":"10",
          "date_added":"07/10/2014"
        },
        {
          "id":4,
          "customer_id":"455554",
          "department": "Sales and Marketing",
          "first_name":"Bryan",
          "last_name":"Conde",
          "perk_used":"54",
          "date_added":"07/10/2014"
        },
        {
          "id":5,
          "customer_id":"445221",
          "department": "Admin",
          "first_name":"Carlos",
          "last_name":"Celdran",
          "perk_used":"43",
          "date_added":"07/10/2014"
        }
      ];
    };
  });
