/*
 * Javascripts
 * ========================================================================== */

import angular          from 'angular';
import HomeController   from './controller/HomeCtrl';

/*
 * Stylesheets
 * ========================================================================== */

import './stylesheets/home.scss';

/* ========================================================================== */

/**
 * Define app public section home page module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module of Workflow app
 */
export default angular.module('Workflow.App.Home', []).controller('HomeController', HomeController).name;
