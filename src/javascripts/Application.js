/*
 * Modules
 * ========================================================================== */

import angular  from 'angular'

import 'angular-route'

/* ========================================================================== */


const name = 'Workflow';
let   deps = ['ngRoute'];

const Application = angular.module(name, deps);
Application.init  = () => angular.bootstrap(document, [name]);

export default Application
