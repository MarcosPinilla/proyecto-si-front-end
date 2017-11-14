angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('postulacion');

  $stateProvider
    .state('postulacion', {
      url: '/postulacion',
      component: 'postulacion'
    })
    .state('formularioalu', {
      url: '/formularioalumno',
      component: 'formularioalu'
    })
    .state('panelprofesor', {
      url: '/panelprofesor',
      component: 'panelprofesor'
    })
    .state('perfil', {
      url: '/perfil',
      component: 'perfil'
    });
}
