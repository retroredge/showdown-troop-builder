app.directive('diePicker', function() {
  return {
    restrict: 'E',
    scope: {
      stat: '=',
      statname: '='
    },
    templateUrl: 'js/directives/diePicker.html'
  };
});
