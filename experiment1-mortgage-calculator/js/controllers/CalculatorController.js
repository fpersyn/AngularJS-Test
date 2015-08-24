app.controller('CalculatorController', 
['$scope', function($scope) {
	$scope.category = {
		singleSelect: 1,
		options: [
			{id: '1', name: 'vast maandelijks bedrag'},
			{id: '2', name: 'vaste kapitaalaflossing'},
			{id: '3', name: 'geen kapitaalaflossing'},
		], 
	};
	$scope.sum = 100000;
	$scope.years = 30;
	$scope.interest = 0.05;
	$scope.interestType = 1;
	$scope.startdate = new Date();
}]);