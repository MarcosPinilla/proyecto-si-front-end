(function () {
  'use strict';

  angular
  .module('app')
  .component('menu', {
    templateUrl: 'app/components/menu/menu.html',
    controller: menuCtr,
    controllerAs: 'vm'
  });

  function menuCtr() {}
})();
