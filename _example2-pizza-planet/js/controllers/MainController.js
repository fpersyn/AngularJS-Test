app.controller('MainController', 
['$scope', function($scope) {
  $scope.today = new Date();
  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    },
  ];
  $scope.pizzas = [
    {
      name: 'Pizza Margherita',
      description: 'Tomato, mozzarella, fresh basil, salt and olive oil',
      price: 12.95,
    },
    {
      name: 'Pizza Capricciosa',
      description: 'Tomato, mozzarella, baked ham, mushroom, artichoke and olives',
      price: 14.95,
    },
    {
      name: 'Pizza Napolitana',
      description: 'Tomato, mozzarella, fresh basil and anchovy',
      price: 12.95,
    }
  ];
  
    $scope.extras = [
    {
      name: 'Tiramisu',
      description: 'Biscuits, mascarpone, coffee and cacoa powder',
      price: 4.95,
    },
    {
      name: 'Panna Cotta',
      description: 'Cream, vanilla and wild fruit coulis',
      price: 4.95,
    },
    {
      name: 'Gelato',
      description: 'Italian vanilla ice cream',
      price: 4.95,
    }
  ];
}]);