angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('app/components/formularioalu/formularioalumno.html','<md-content flex-offset="10" flex="80" class="fondo">\r\n\t<center layout-padding>\r\n\t\t<h3><strong>Postulaci\xF3n</strong></h3>\r\n\t\t<div layout="row">\r\n\t\t\t<md-input-container flex="30">\r\n\t\t\t\t<label>Codigo Asignatura</label>\r\n\t\t\t\t<input type="text">\r\n\t\t\t</md-input-container>\r\n\t\t\t<md-input-container flex="70">\r\n\t\t\t\t<label>Asignatura</label>\r\n\t\t\t\t<input type="text">\r\n\t\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div layout="row">\r\n\t\t\t<md-input-container flex="30">\r\n\t\t\t\t<label>Semestre</label>\r\n\t\t\t\t<input type="text">\r\n\t\t\t</md-input-container>\r\n\t\t\t<md-input-container flex="30">\r\n\t\t\t\t<label>A\xF1o</label>\r\n\t\t\t\t<input type="text">\r\n\t\t\t</md-input-container>\r\n\t\t\t<md-input-container flex="15">\r\n\t\t\t\t<label>N\xB0 Horas</label>\r\n\t\t\t\t<input type="number">\r\n\t\t\t</md-input-container>\r\n\t\t\t<div layout-padding>\r\n\t\t\t\t<md-checkbox>\r\n        \tRemunerado\r\n      \t</md-checkbox>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div layout="row">\r\n\t\t\t<md-input-container flex="50">\r\n\t\t\t\t<label>Departamento</label>\r\n\t\t\t\t<input type="text">\r\n\t\t\t</md-input-container>\r\n\t\t\t<md-input-container flex="50">\r\n\t\t\t\t<label>Profesor</label>\r\n\t\t\t\t<input type="text">\r\n\t\t\t</md-input-container>\r\n\t\t</div>\r\n\t\t<div flex="50" layout="row">\r\n\t\t\t<md-button class="md-raised md-primary" md-colors="{background: \'Blue\'}" flex>Postular</md-button>\r\n\t\t</div>\r\n\t</center>\t\r\n</md-content>');
$templateCache.put('app/components/postulacion/postulacion.html','<div layout-padding>\r\n  <div class="fond">\r\n    <div>\r\n      <div layout-padding layout-align="center start">\r\n        <div flex flex-xs="90" flex-offset-xs="5" layout-align="center center">\r\n          <h2>Formulario de Postulaci\xF3n</h2>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div ng-cloak>\r\n      <md-tabs md-dynamic-height md-border-bottom>\r\n        <md-tab label="Alumno">\r\n          <div class="md-padding">\r\n            <formularioalu></formularioalu>\r\n          </div>\r\n        </md-tab>\r\n        <md-tab label="Profesor">\r\n          <div class="md-padding">\r\n            <panelprofesor></panelprofesor>\r\n          </div>\r\n        </md-tab>\r\n        <md-tab label="Documentos">\r\n          <div class="md-padding">\r\n          </div>\r\n        </md-tab>\r\n      </md-tabs>\r\n    </div>\r\n  </div>\r\n</div>\r\n');
$templateCache.put('app/components/sidebar/sidebar.html','<div layout="row" style="height: 100%">\r\n  <md-sidenav flex="20" class="md-sidenav-left" md-component-id="left" md-is-locked-open="$mdMedia(\'gt-md\')" md-whiteframe="4">\r\n    <md-toolbar class="md-theme-indigo" md-colors="{background: \'Blue-600\'}">\r\n      <div layout="row" layout-align="center center">\r\n        <img src="/assets/img/user.png" class="imag">\r\n        <div layout-padding layout="column">\r\n          <div>\r\n            <h5>Daniel Coronado</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div layout-align="end center">\r\n        <h6 class="info">Ing. Informatica</h6>\r\n      </div>\r\n    </md-toolbar>\r\n    <div layout-padding>\r\n      <div flex layout="column">\r\n        <div>\r\n          <md-button style="width:100%" class="texto">\r\n            <md-icon md-svg-src="/assets/img/usuarios.svg" ui-sref="postulacion"></md-icon>Perfil\r\n          </md-button>\r\n        </div>\r\n        <div>\r\n          <md-button style="width:100%" class="texto">\r\n            <md-icon md-svg-src="/assets/img/formulario.svg"></md-icon>Formulario\r\n          </md-button>\r\n        </div>\r\n      </div>\r\n      <div flex layout="column" class="separar">\r\n        <div>\r\n          <md-button style="width:100%" class="texto">\r\n            <md-icon md-svg-src="/assets/img/pensar.svg"></md-icon>Estado Postulacion\r\n          </md-button>\r\n        </div>\r\n      </div>\r\n    </div> \r\n  </md-sidenav>\r\n  <div layout="column" flex="80" flex-xs="100" flex-md="100" flex-sm="100">\r\n    <md-toolbar class="md-hue-2 toolbar" md-colors="{background: \'Blue\'}" layout="row" style="height:50px">\r\n      <div class="md-toolbar-tools">\r\n        <md-button class="md-icon-button">\r\n          <md-icon></md-icon>\r\n        </md-button>\r\n        <h2 flex md-truncate>TPS Ayudantes UFRO</h2>\r\n      </div>\r\n    </md-toolbar>\r\n    <ui-view></ui-view>\r\n  </div>\r\n</div>\r\n\r\n');
$templateCache.put('app/components/panelprofesor/panelprofesor.html','<md-content flex-offset="10" flex="80" class="fondo">\r\n\t<center layout-padding>\r\n\t\t<h3><strong>Postulaciones</strong></h3>\t\r\n\t\t<div layout="column" class="fondo" flex="80">\r\n\t\t\t<div layout="column">\r\n\t\t\t\t<h4>Daniel Coronado</h4>\r\n\t\t\t\t<md-divider></md-divider>\r\n\t\t\t\t<h5>Sistemas de Informaci\xF3n</h5>\r\n\t\t\t</div>\r\n\t\t\t<div layout="row">\r\n\t\t\t\t<md-button class="md-raised md-primary" md-colors="{background: \'Blue\'}" flex>Firmar</md-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div layout="column" class="fondo" flex="80">\r\n\t\t\t<div layout="column">\r\n\t\t\t\t<h4>Matias Gutierrez</h4>\r\n\t\t\t\t<md-divider></md-divider>\r\n\t\t\t\t<h5>Programaci\xF3n</h5>\r\n\t\t\t</div>\r\n\t\t\t<div layout="row">\r\n\t\t\t\t<md-button class="md-raised md-primary" md-colors="{background: \'Blue\'}" flex>Firmar</md-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div layout="column" class="fondo" flex="80">\r\n\t\t\t<div layout="column">\r\n\t\t\t\t<h4>Felipe Acu\xF1a</h4>\r\n\t\t\t\t<md-divider></md-divider>\r\n\t\t\t\t<h5>Programaci\xF3n</h5>\r\n\t\t\t</div>\r\n\t\t\t<div layout="row">\r\n\t\t\t\t<md-button class="md-raised md-primary" md-colors="{background: \'Blue\'}" flex>Firmar</md-button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div layout="column" class="fondo" flex="80">\r\n\t\t\t<div layout="column">\r\n\t\t\t\t<h4>Marcos Pinilla</h4>\r\n\t\t\t\t<md-divider></md-divider>\r\n\t\t\t\t<h5>Programaci\xF3n</h5>\r\n\t\t\t</div>\r\n\t\t\t<div layout="row">\r\n\t\t\t\t<md-button class="md-raised md-primary" md-colors="{background: \'Blue\'}" flex>Firmar</md-button>\r\n\t\t\t</div>\r\n\t\t</div>\t\r\n\t</center>\t\r\n</md-content>');}]);