'use strict';
/**
 * Resource file for en g18n
 */
angular.module('basic').config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('zh', {
    'web_login_001': '账户登录',
    'web_login_002': '用户名',
    'web_login_003': '用户名不能为空',
    'web_login_004': '密码',
    'web_login_005': '密码不能为空',
    'web_login_006': '记住用户名',
    'web_login_007': '登录',
    'web_login_008': '没有账号?',
    'web_login_009': '立即注册',
    


  });
}]);
