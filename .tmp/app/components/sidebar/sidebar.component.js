(function () {
  'use strict';

  angular
  .module('app')
  .component('sidebar', {
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: sidebarCtr,
    controllerAs: 'vm'
  });

  function sidebarCtr() {}
})();
