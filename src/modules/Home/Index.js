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


export default angular.module('Workflow.Home', []).controller('HomeController', HomeController).name;
