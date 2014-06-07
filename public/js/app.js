var calculator = angular.module('Calculator', []);
calculator.controller('Calculator', function ($scope, $http) {
	var number1, number2, operation;

	var sendCalculationRequest = function(formData) {
		$http.post('http://calc-server.herokuapp.com/calc/calcule', formData)
			.success(function(data) {

			}) 
			.error(function(data) {
				console.log('Error: '+ data);
			});
	};

	$scope.result = '_';
    $scope.calculation;
    $scope.operation = 'add';

    $scope.erase = function() {
    	$scope.result = '_';
	    $scope.calculation;
	    $scope.number1 = null;
	    $scope.number2 = null;
    }

    $scope.calculate = function() {
    	if($scope.number1 && $scope.number2) {
    		var formData = { operation: $scope.operation, number1: $scope.number1, number2: $scope.number2};

    		if($scope.number2 === 0 && $scope.operation === 'div') {
    			alert('Invalid Operation');
    		}

    		sendCalculationRequest(formData);
    	}
    };

})