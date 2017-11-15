(function () {
  'use strict';

  angular
  .module('app')
  .component('sidebar', {
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: sidebarCtr,
    controllerAs: 'vm'
  });

  sidebarCtr.$inject = ['$localStorage'];

  function sidebarCtr($localStorage) {
    var vm = this;

    vm.variablexd = false || $localStorage.variable;

  }
})();
