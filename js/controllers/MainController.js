app.controller('MainController',
['$scope', function($scope) {
	$scope.title = 'Top Sellers in Books';
	$scope.promo = 'Summer Sale';
	$scope.product = {
		name: 'The Book of Code',
		price: 19,
	};
}]);