/**
 * Adding redirectTo from config ability.
 * @module Runners
 * @see Application
 * @param {Object} $rootScope - Global application model.
 * @param {Object} $state - Provides interfaces to current state.
 */
const Runners = ($rootScope, $state) => {
  "ngInject";

  /**
   * Waiting route change start event.
   * @param {Object} event.
   * @param {Object} to - Next state.
   */
  $rootScope.$on('$stateChangeStart', (event, to) => {
    if (to.redirectTo) {
      event.preventDefault();
      $state.go(to.redirectTo);
    }
  });
};

/** Export our runners */
export default Runners;
