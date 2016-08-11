(function(angular){
    
    'use strict';
         angular.module('Hive')
                .controller("meCtrl", ["$scope","refService","$state","$firebaseObject",meCtrlFunc])
                
                function meCtrlFunc($scope,refService,$state,$firebaseObject) {
                    $scope.currentAuthGetPro = refService.ref().getAuth();
                    
                    if( $scope.currentAuthGetPro == null)
                        $state.go('home');
                    
                      var obj = $firebaseObject(refService.ref().child("UserAuthInfo").child($scope.currentAuthGetPro.uid));
                     
                     
                    obj.$loaded(function(data) {
                        
                        console.log(data.Image);
                            $scope.Username = data.Username;
                            $scope.Email = data.Email;
                            $scope.UID = $scope.currentAuthGetPro.uid;
                            $scope.image = data.Image;
                            $scope.backImage = data.profileBackground
                            $scope.desc = data.Description || "The User is Silent as the butterflies..."
                            $scope.Moderator = data.Moderator;
                            $scope.ProfileViews = data.profileViews
                            $scope.Followers = data.followers;
                            $scope.Following = data.following;
                            
                    })
                
                
                    $scope.logout_form = function()
                    {
                         refService.ref().unauth();
                         $state.go('home');
                         location.reload(true);
                    }
                }
    
})(angular);

