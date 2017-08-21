'use strict';
/**
 * Created by sorcerer on 2017/6/1.
 */

angular.module('basic.router', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
    //home
      .state('homeIndex', {
        url: '/',
        templateUrl: 'views/homeIndex.html',
        controller: 'HomeCtrl',
        // abstract: true,
        resolve:{
          //homesso: ['sso', function(sso){
          //  return sso.get().$promise;
          //}]
        }
      })

      .state('login', {
        url:"/login",
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      });


  }]);
