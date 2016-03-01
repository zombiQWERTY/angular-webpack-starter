/**
 * @module Root controller
 * @class SimplyController
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
