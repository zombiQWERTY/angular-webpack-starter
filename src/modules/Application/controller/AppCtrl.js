/**
 * @module Root controller
 * @class AppController
 */
export default class AppController {  /*@ngInject*/
  /**
   * @constructor Bootstrap app.
   * @param {object} $scope - Local (in this controller) application model.
   */
  constructor($scope) {
    this.$scope = $scope;
  }
}
