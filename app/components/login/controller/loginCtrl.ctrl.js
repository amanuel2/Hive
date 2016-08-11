// JavaScript File
(function(angular) {

    'use strict';
    angular.module('Hive')
        .controller("loginCtrl", ["$scope", "refService","letterAvatarService","$ionicPopup","$state",loginCtrlFunc])

    function loginCtrlFunc($scope, refService,letterAvatarService,$ionicPopup,$state) {
        
        $scope.login_form = function()
        {
            var EMAIL = document.getElementById("email_form").value;
            
            refService.ref().authWithPassword({
                "email": EMAIL,
                "password": document.getElementById("pass_form").value
            }, function(error, authData) {
                if (error) {
                    sweetAlert("Oops...", "Unsucessfull Authentication. See console for details", "error");
                    console.error(error);
                }
                else {
                    swal("Sucessfull Authentication");
                    $state.go('me')
                }
            });
        }

    }

})(angular);
