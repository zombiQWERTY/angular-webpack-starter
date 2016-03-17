import angular   from 'angular';
import FastClick from 'fastclick';

/**
 * Enable all third-party scripts
 * @module ThirdParties
 */
const ThirdParties = () => {
  return {
    restrict: 'A',
    link() {
      new FastClick(document.body);  /** Remove 300ms delay on touch devices */
    }
  };
};

/**
 * Define ThirdParties module.
 * @param {String} moduleName.
 * @param {Array} dependencies.
 * @export Module name - name of this module.
 */
export default angular.module('Starter.App.ThirdParties', []).directive('thirdParties', ThirdParties).name;
