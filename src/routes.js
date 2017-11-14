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
    });
}
