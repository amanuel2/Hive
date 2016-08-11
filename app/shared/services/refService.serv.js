(function(angular) {
    var app = angular.module('Hive')

    app.service('refService', ["$firebaseAuth", refService])
    
    function refService($firebaseAuth){
        this.ref = function() {
            return new Firebase('https://hive-study.firebaseio.com/');
        }
        this.refAuth = function() {
            return $firebaseAuth(this.ref());
        }
    
    }
})(angular);