(function () {
  'use strict';

  angular
  .module('app')
  .component('perfil', {
    templateUrl: 'app/components/perfil/perfil.html',
    controller: perfilCtrl,
    controllerAs: 'vm'
  });

  function perfilCtrl() {}
})();
