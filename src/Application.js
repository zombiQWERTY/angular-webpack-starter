import angular    from 'angular';
import uiRouter   from 'angular-ui-router';

import Config     from './Config';
import layoutView from './modules/Layout/views/layout.jade';

import Layout     from './modules/Layout/Index';
import Home       from './modules/Home/Index';



const appname = 'Workflow';
const deps    = [uiRouter];
const modules = [Layout, Home];

document.getElementById('app-container').innerHTML = layoutView();
angular.module(appname, deps.concat(modules)).config(Config);
angular.bootstrap(document, [appname]);
