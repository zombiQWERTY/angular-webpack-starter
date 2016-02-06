import angular    from 'angular';
import ngRoute    from 'angular-route';

import Config     from './Config';
import layoutView from './modules/Layout/views/layout.jade';

import Layout     from './modules/Layout/Index';
import Home       from './modules/Home/Index';



const appname = 'Workflow';
const deps    = [ngRoute];
const modules = [Layout, Home];

document.getElementById('app-container').innerHTML = layoutView();
angular.module(appname, deps.concat(modules)).config(Config);
angular.bootstrap(document, [appname]);
