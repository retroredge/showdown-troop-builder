var app = angular.module('showdownTroopBuilder', []); // Empty array is dependant modules

app.config(['$logProvider','$compileProvider', function($logProvider,$compileProvider) { 
  $logProvider.debugEnabled(true);

  //To prefent "unsafe" prefix on the generate JSON export link
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|data):/);
}]);
