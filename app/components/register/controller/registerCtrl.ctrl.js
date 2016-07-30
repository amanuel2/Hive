(function(angular) {

    'use strict';
    angular.module('Hive')
        .controller("registerCtrl", ["$scope", "refService","letterAvatarService","$ionicPopup", registerCtrlFunc])

    function registerCtrlFunc($scope, refService,letterAvatarService,$ionicPopup) {



        $scope.registerForm = function() {

            $scope.isUsernameDupe = false;
            refService.ref().child("UserAuthInfo").on("value", function(snapshot) {
                snapshot.forEach(function(childSNap) {

                    var key = childSNap.key();
                    var childData = childSNap.val();

                    if (childData.Username == $scope.register.username) {
                        $scope.isUsernameDupe = true;
                        return;
                    }
                });
                if (($scope.isUsernameDupe != true)) {
                    if ($scope.isUsernameDupe == false) {
                        refService.ref().createUser({
                            email: $scope.register.email,
                            password: $scope.register.password
                        }, function(error, userData) {
                            if (error) {
                                switch (error.code) {
                                    case "EMAIL_TAKEN":
                                        var alertPopup = $ionicPopup.alert({
                                             title: 'EMAIL_TAKEN',
                                             template: 'The new user account cannot be created because the email is already in use.'
                                         });
                                        break;
                                    case "INVALID_EMAIL":
                                        var alertPopup = $ionicPopup.alert({
                                             title: 'INVALID_EMAIL',
                                             template: 'The specified email is not a valid email.'
                                         });
                                        break;
                                    default:
                                        var alertPopup = $ionicPopup.alert({
                                             title: 'ERROR',
                                             template: "Error creating user:" + error
                                         });
                                }
                            }
                            else {
                                $scope.$evalAsync(
                                    function() {
                                        var letterAvatar = letterAvatarService.getLetterURL($scope.register.username, $scope.loadImageJSON);
                                        setTimeout(function() {
                                            refService.ref().child("UserAuthInfo").child(userData.uid).set({
                                                Username: $scope.register.username,
                                                Email: $scope.register.email,
                                                UID: userData.uid,
                                                Image: letterAvatarService.getLetterURL($scope.register.username),
                                                Moderator: false,
                                                BronzeBadge: 0,
                                                SilverBadge: 0,
                                                GoldBadge: 0,
                                                PlatinumBadge: 0,
                                                newUser: true,
                                                profileBackground: 'http://rmdeaftheatre.com/wp-content/uploads/2012/11/gray-background-3.jpg',
                                                followers: 0,
                                                following: 0,
                                                profileViews: 0,
                                                Precence: -1,
                                                Points: 0,
                                                DateJoined: Date.now(),
                                            });

                                        }, 1500);

                                         var alertPopup = $ionicPopup.alert({
                                             title: 'SUCESS',
                                             template: "SUCESSFULLY REGISTERED" + error
                                         });
                                    }
                                );

                            }
                        });
                    }

                }
                else {
                    var alertPopup = $ionicPopup.alert({
                                             title: 'ERROR',
                                             template: "USERNAME IS ALREDY IN USE"
                                         });
                }
            });




        };




    }

})(angular);
