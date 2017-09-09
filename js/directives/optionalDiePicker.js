app.directive('optionalDiePicker', function() {
  return {
    restrict: 'E',
    scope: {
      stat: '=',
      statname: '='
    },
    controller: function ($scope) {
        $scope.clearSkill = function(event) {
			$scope.stat = "";
			event.currentTarget.checked = false;
		    console.log('attempting to clear radio buttons...');
	    }
    },
    templateUrl: 'js/directives/optionalDiePicker.html'
  };
});
