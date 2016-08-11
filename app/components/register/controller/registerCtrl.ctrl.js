(function(angular) {

    'use strict';
    angular.module('Hive')
        .controller("registerCtrl", ["$scope", "refService", "letterAvatarService", "$ionicPopup", registerCtrlFunc])

    function registerCtrlFunc($scope, refService, letterAvatarService, $ionicPopup) {
        var usersRef = new Firebase('https://hive-study.firebaseio.com/');

        //swal("Here's a message!")


        $scope.registerForm = function() {
            
            var EMAIL_REG = document.getElementById("reg_email").value
            var FIRST_NAME_REG = document.getElementById("reg_first_name").value;
            var LAST_NAME_REG = document.getElementById("reg_last_name").value;
            var USERNAME_REG = document.getElementById("reg_user_name").value;
            $scope.username_dupe = false;

            if (!(EMAIL_REG && FIRST_NAME_REG && LAST_NAME_REG && USERNAME_REG && (document.getElementById("reg_pass").value) &&
                    (document.getElementById("reg_confirm_pass").value))) {
                sweetAlert("Oops...", "Forgot to fill one of the fields!", "error");

            }


            if (document.getElementById("reg_pass").value == document.getElementById("reg_confirm_pass").value) {
                refService.ref().child("UserAuthInfo").once("value", function(snapshot) {
                    snapshot.forEach(function(childSNap) {

                        var key = childSNap.key();
                        var childData = childSNap.val();

                        if (childData.Username == USERNAME_REG) {
                            console.log(childData.Username)
                            $scope.username_dupe = true;
                            return;
                        }

                    })

                    console.log($scope.username_dupe);
                    if ($scope.username_dupe == true)
                    {
                        console.log("OOPSY");
                         sweetAlert("Oops...", "Username is a duplicate!", "error");;
                         console.log($scope.username_dupe);
                    }
                       

                    else if ($scope.username_dupe == false) {
                        console.log("GOOD");
                        console.log($scope.username_dupe);
                        refService.ref().createUser({
                            email: EMAIL_REG,
                            password: document.getElementById("reg_pass").value
                        }, function(error, authData) {
                            if (error) {
                                switch (error.code) {
                                    case "EMAIL_TAKEN":
                                        sweetAlert("Oops...", "The new user account cannot be created because the email is already in use.", "error");
                                        break;
                                    case "INVALID_EMAIL":

                                        sweetAlert("Oops...", "The specified email is not a valid email.", "error");
                                        break;
                                    default:
                                        sweetAlert("Oops...", "Error creating user:" + error, "error");
                                }
                            }
                            else {


                                refService.ref().child("UserAuthInfo").child(authData.uid).set({
                                    Username: USERNAME_REG,
                                    Email: EMAIL_REG,
                                    UID: authData.uid,
                                    Image: letterAvatarService.getLetterURL(USERNAME_REG),
                                    Moderator: false,
                                    BronzeBadge: 0,
                                    SilverBadge: 0,
                                    GoldBadge: 0,
                                    PlatinumBadge: 0,
                                    newUser: true,
                                    profileBackground: 'http://cine.nl/wp-content/uploads/2015/07/the-revenant-trailer.jpg',
                                    followers: 0,
                                    following: 0,
                                    profileViews: 0,
                                    Precence: -1,
                                    Points: 0,
                                    DateJoined: Date.now(),
                                })

                                swal("Good job!", "Sucessfully Registered", "success")
                                
                                $state.go("home");

                            }

                        })

                    }

                    else
                        sweetAlert("Oops...", "What the fuck?", "error");

                })


            }
            else {
                sweetAlert("Oops...", "Password Confirmation Incorrect!", "error");
            }
        };




    }

})(angular);