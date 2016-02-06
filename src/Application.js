import angular    from 'angular';
import ngRoute    from 'angular-route';

import Routing    from './Routing';
import layoutView from './modules/Layout/views/layout.jade';

import Layout     from './modules/Layout/Index';
import Home       from './modules/Home/Index';



const appname = 'CFM';
const deps    = [ngRoute];
const modules = [Layout, Home];

document.getElementById('app-container').innerHTML = layoutView();
angular.module(appname, deps.concat(modules)).config(Routing);
angular.bootstrap(document, [appname]);
