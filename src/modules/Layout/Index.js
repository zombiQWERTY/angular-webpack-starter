/*
 * Javascripts
 * ========================================================================== */

import angular          from 'angular';
import LayoutController from './LayoutCtrl';
import PointerEvents    from './PointerEventsDirective';

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

import './header/header.scss';

/* Footer
 * ===================================== */

import './footer/footer.scss';

/* ========================================================================== */


export default angular.module('Layout', [
  PointerEvents
]).controller('LayoutController', LayoutController).name;
