(function(angular){
    
    'use strict';
         angular.module('Hive')
                .controller("homeCtrl", ["$scope", "refService","$mdColorPalette", homeCtrlFunc])
                
      
                function homeCtrlFunc($scope,refService,$mdColorPalette) {
                    console.log(Object.keys($mdColorPalette));
                }
    
})(angular);

