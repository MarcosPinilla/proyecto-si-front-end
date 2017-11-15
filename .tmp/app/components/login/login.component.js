(function () {
  'use strict';

  angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginCtrl,
    controllerAs: 'vm'
  });

  loginCtrl.$inject = ['$localStorage', '$rootScope'];

  function loginCtrl($localStorage, $rootScope) {
    var vm = this;
    vm.cambio = function() {
      $localStorage.vista = true;
      var message = true;

      $rootScope.$broadcast('greeting', message);

    }
  }
})();
