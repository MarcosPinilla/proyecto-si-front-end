(function () {
  'use strict';

  angular
  .module('app')
  .component('registro', {
    templateUrl: 'app/components/registro/registro.html',
    controller: registroCtrl,
    controllerAs: 'vm'
  });

  registroCtrl.$inject = ['$localStorage', '$rootScope'];

  function registroCtrl($localStorage, $rootScope) {
    var vm = this;
    vm.cambio = function() {
      var message = true;

      $rootScope.$broadcast('greeting', message);

    }
  }
})();
