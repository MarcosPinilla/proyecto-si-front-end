(function () {
  'use strict';

  angular
  .module('app')
  .component('registro', {
    templateUrl: 'app/components/registro/registro.html',
    controller: registroCtrl,
    controllerAs: 'vm'
  });

  function registroCtrl() {}
})();
