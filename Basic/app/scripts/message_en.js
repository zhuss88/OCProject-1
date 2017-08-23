'use strict';
/**
 * Resource file for en g18n
 */
angular.module('basic').config(['$translateProvider', function($translateProvider) {
  $translateProvider.translations('en', {
    'web_login_001': 'Account login',
    'web_login_002': 'user name',
    'web_login_003': 'User name cannot be empty',
    'web_login_004': 'Password',
    'web_login_005': 'Password cannot be empty',
    'web_login_006': 'Remember user name',
    'web_login_007': 'Sign in',
    'web_login_008': 'No account?',
    'web_login_009': 'Register immediately',
    

  });
}]);
