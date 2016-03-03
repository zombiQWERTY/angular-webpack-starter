/*
 * Javascripts
 * ========================================================================== */

import angular       from 'angular';
import AppController from './controller/AppCtrl';

import PointerEvents from './directives/PointerEvents/PointerEventsDirective';
import ThirdParties  from './directives/ThirdParties/ThirdPartiesDirective';

/*
 * Stylesheets
 * ========================================================================== */

/* Base
 * ===================================== */

import './stylesheets/reset.scss';
import './stylesheets/fonts.scss';
import './stylesheets/globals.scss';

/* Header
 * ===================================== */

import './subModules/Header/header.scss';

/* Footer
 * ===================================== */

import './subModules/Footer/footer.scss';

/* Layout
 * ===================================== */

import './stylesheets/layout.scss';

/* ========================================================================== */

/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of root module
 */
export default angular.module('Workflow.App', [
  PointerEvents, ThirdParties
]).controller('AppController', AppController).name;
