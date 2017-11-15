(function () {
  'use strict';

  angular
  .module('app')
  .component('sidebar', {
    templateUrl: 'app/components/sidebar/sidebar.html',
    controller: sidebarCtr,
    controllerAs: 'vm'
  });

  sidebarCtr.$inject = ['$localStorage', '$scope'];

  function sidebarCtr($localStorage, $scope) {

    var vm = this;

    vm.vista = false;

    $scope.$on('greeting', function ($event, message) {
      vm.vista = message;
    });

    
  }
})();
