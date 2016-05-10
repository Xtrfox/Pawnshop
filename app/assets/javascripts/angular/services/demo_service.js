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
          "id":1,
          "customer_id":"3579",
          "first_name":"Paolo",
          "last_name":"Agloro",
          "city": "Mandaluyong",
          "mobile": "09997774433",
          "landline": "4448899",
          "birth_date": "January 1, 1960",
          "date_added": "06/15/2014"
        },
        {
          "id":1,
          "customer_id":"3579",
          "first_name":"Life Lofranco",
          "last_name":"Lofranco",
          "city": "Mandaluyong",
          "mobile": "09997774433",
          "landline": "4448899",
          "birth_date": "January 1, 1960",
          "date_added": "06/15/2014"
        },
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
          "id":1,
          "customer_id":"3579",
          "first_name":"Leo Lope",
          "last_name":"Lofranco",
          "city": "Mandaluyong",
          "mobile": "09997774433",
          "landline": "4448899",
          "birth_date": "January 1, 1960",
          "date_added": "06/15/2014"
        }
      ];
    };
  });
