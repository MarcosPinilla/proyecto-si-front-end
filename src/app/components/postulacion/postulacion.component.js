(function () {
  'use strict';

  angular
  .module('app')
  .component('postulacion', {
    templateUrl: 'app/components/postulacion/postulacion.html',
    controller: postulacionCtr,
    controllerAs: 'vm'
  });

  function postulacionCtr() {}
})();
