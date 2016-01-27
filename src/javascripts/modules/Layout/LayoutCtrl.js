/*
 * Modules
 * ========================================================================== */

import FastClick   from 'Fastclick';
import Application from '../../Application';

 /* ========================================================================== */

/*
 * Directives
 * ========================================================================== */

import './PointerEventsDirective';

 /* ========================================================================== */

/*
 * Styles
 * ========================================================================== */

/*
 * Helpers
 * ===================================== */

import '../../../stylesheets/helpers/mixins.scss';
import '../../../stylesheets/helpers/variables.scss';

/*
 * Base
 * ===================================== */

import './stylesheets/base/reset.scss';
import './stylesheets/base/fonts.scss';
import './stylesheets/base/globals.scss';

/*
 * Layout
 * ===================================== */

import './stylesheets/layout/global.scss';

/*
 * Header
 * ===================================== */

import './stylesheets/header/header.scss';

/*
 * Footer
 * ===================================== */

import './stylesheets/footer/footer.scss';

 /* ========================================================================== */


Application.controller('LayoutController', [
  '$scope',
  '$location',
  ($scope, $location) => {
    class Layout {
      constructor() {
        new FastClick(document.body);
        $scope.getRoute = this.getRoute();
      }

      static getRoute() {
        return $location.url();
      }
    }
    new Layout();
  }
]);
