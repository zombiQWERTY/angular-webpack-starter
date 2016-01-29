/*
 * Modules
 * ========================================================================== */

import angular  from 'angular';

import 'angular-route';

/* ========================================================================== */


const appname = 'CFM';
let   deps    = ['ngRoute'];

const Application = angular.module(appname, deps);
Application.init  = () => angular.bootstrap(document, [appname]);

export default Application;
