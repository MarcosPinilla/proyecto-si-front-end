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

    vm.usuario = {
    	email:'',
    	password:''
    };

    vm.usuarios = $localStorage.usuarios || [];

    vm.ok = false;

    vm.login = function(modelo) {
    	for (var i = 0; i<10; i++) {
    		if (usuaios[i].email == modelo.email && usuaios[i] == modelo.password) {
    			vm.ok= true;
    		}
    	}
    }

    vm.cambio = function() {
      var message = true;

      $rootScope.$broadcast('greeting', message);

    }
  }
})();
