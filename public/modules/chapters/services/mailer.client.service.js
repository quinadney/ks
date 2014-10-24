'use strict';

//Chapters service used to communicate Chapters REST endpoints
angular.module('chapters').factory('Mailer', ['$http', function($http) {
    return {
      sendEmail: function(emailData, callback) {
        $http.post('/sendEmail', emailData).success(callback);
      }
  };
}]);