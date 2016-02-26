/*
 * Javascripts
 * ========================================================================== */

import angular          from 'angular';
import LayoutController from './controller/LayoutCtrl';
import PointerEvents    from './directives/PointerEvents/PointerEventsDirective';

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

/* Header
 * ===================================== */

import './subModules/Header/header.scss';

/* Footer
 * ===================================== */

import './subModules/Footer/footer.scss';

/* ========================================================================== */


export default angular.module('Workflow.Layout', [
  PointerEvents
]).controller('LayoutController', LayoutController).name;
