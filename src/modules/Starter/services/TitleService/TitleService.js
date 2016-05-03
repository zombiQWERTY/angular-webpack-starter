/* Copyright (C) Simply.info
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pavel Zinovev <zombiqwerty@yandex.ru>, March 2016
 */

import angular from 'angular';

/**
 * @constructor
 */
const Service = () => {
  'ngInject';

  class TitleService {
    static setTitle(params = {}) {
      const defaultTitle = params.default  || 'Angular Webpack Starter Kit';
      const newTitle     = params.newTitle || '';
      const devider      = params.devider  || ' –– ';

      document.title = newTitle + (newTitle ? devider : '') + defaultTitle;
    }
  }

  return {
    setTitle: TitleService.setTitle
  };
};

export default angular.module('Starter.App.TitleService', []).factory('TitleService', Service).name;
