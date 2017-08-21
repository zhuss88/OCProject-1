'use strict';
/**
 * Created by sorcerer on 2017/8/3.
 */

angular.module('basic')
.controller('loginCtrl',['$scope','$state',function ($scope,$state) {
  //$rootScope.tab = "service";
  $scope.usermessage={
    username:'',
    password:''
  }
  
  $scope.isForget = false;
  
  $scope.gologin= function () {
    login.post($scope.usermessage, function (data) {
      //console.log('data', data);
      Cookie.set('username',$scope.usermessage.username ,  24 * 3600 * 1000);
      Cookie.set('token', data.token, 24 * 3600 * 1000);
      $state.go('console.tenant');
    })
  }
}]);
