(function(angular) {

  'use strict';
  angular.module('Hive')
    .controller("discussionsCtrl", ["$scope", "$timeout", "$mdSidenav", "$log", "$mdDialog", "$mdMedia", discussionsCtrlFunc])



  function discussionsCtrlFunc($scope, $timeout, $mdSidenav, $log, $mdDialog, $mdMedia) {
    //START HERE  ---- OK
    
    $scope.$watch('search', function()
    {
      console.log("Change");
    })


    //END HERE  
  }




  //
})(angular);
