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

/* Layout
 * ===================================== */

import './stylesheets/layout.scss';

/* ========================================================================== */

/**
 * Define app module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of root module of Simply app
 */
export default angular.module('Workflow.App', [
  PointerEvents, ThirdParties
]).controller('AppController', AppController).name;
