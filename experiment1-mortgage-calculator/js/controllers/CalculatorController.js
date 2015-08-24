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

	$scope.monthlyinterest = function monthlyinterest() {
  		return $scope.interest / 12;
	};
	
	$scope.fixedAnnuity = function fixedAnnuity() {
  		return $scope.sum * ( $scope.monthlyinterest() / ( 1 - Math.pow(( 1 + $scope.monthlyinterest() ), -($scope.years * 12) ) ) );
	}

	$scope.annuity = function annuity() {
  		if ($scope.category.singleSelect == 1) { return $scope.fixedAnnuity(); }
  		if ($scope.category.singleSelect == 2) { }
  		if ($scope.category.singleSelect == 3) { }
	};
}]);