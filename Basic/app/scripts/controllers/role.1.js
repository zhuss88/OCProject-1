'use strict';

/**
 * Controller of the dataModel
 */
angular.module('basic')
  .controller('RoleCtrl', ['$rootScope', '$scope', '$state', function ($rootScope, $scope, $state) {
      //左边导航自动变化
      let left_by_block = function(){
        let thisheight = $(window).height()-$(".header").height();
        $('.dataLeft').height(thisheight);
      };
      $(window).resize(function(){
        left_by_block();
      });
      $(function(){
        left_by_block();
      });
      //按钮展开收缩
      $(".zx_set_btn").on("click",function(){
        $(this).toggleClass("zx_set_btn_rotate");
        $(".dataLeft").toggleClass("sider_zx");
      });

     

  }]);
