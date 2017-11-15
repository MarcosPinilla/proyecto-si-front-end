(function () {
  'use strict';

  angular
  .module('app')
  .component('login', {
    templateUrl: 'app/components/login/login.html',
    controller: loginCtrl,
    controllerAs: 'vm'
  });

  loginCtrl.$inject = ['$localStorage'];

  function loginCtrl($localStorage) {
    var vm = this;

    vm.variable = $localStorage.variable || false;

    vm.mod = function () {
    	vm.variable = false;
      	$localStorage.variable = vm.variable;
      	console.log(vm.variable);
      	console.log($localStorage.variable);
    };

    


  }
})();
