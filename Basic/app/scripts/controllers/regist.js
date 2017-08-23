'use strict';

/**
 * Controller of the dataModel
 */

angular.module('basic')
    .controller('registCtrl',['$scope',function ($scope) {
      $scope.usermessage={
        regusername:'',
        email:'',
        password:'',
        cfmPassword:''
      }
      
      function codenum() {
        var str = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
            'o', 'p', 'q', 'r', 's', 't', 'x', 'u', 'v', 'y', 'z', 'w', 'n',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
        ];
        var num = null;
        for (var i = 0; i < 4; i++) {
            var index = Math.floor(Math.random() * str.length);
            if (num) {
                num += str[index];
            } else {
                num = str[index]
            }

        }
        $scope.yzcode = num;
    }

      codenum()
      $scope.changecode = function () {
          codenum()
      };

      $scope.$watch('code', function (n,o) {
        if (n == o) {
            return
        }
        if (n !== $scope.yzcode) {
            $scope.credentials.codeerror=true
        }else {
            $scope.credentials.codeerror=false
        }
    })
    

  }]);
