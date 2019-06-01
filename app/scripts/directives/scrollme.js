'use strict';

/**
 * @ngdoc directive
 * @name searchApp.directive:scrollMe
 * @description
 * # scrollMe
 */
angular.module('searchApp')
  .directive('scrollMe', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
        scope.$on('scroll', function(e, data) {
          if (data.selectedRow === scope.$index) {
            if (element.offset().top < element.parent().offset().top && data.direction === 'up') {
              element.parent().scrollTop(element.parent().scrollTop() - (element.parent().offset().top - element.offset().top));
            }
            if (element.offset().top + element[0].offsetHeight > element.parent().offset().top + element.parent()[0].offsetHeight
              && data.direction === 'down') {
              element.parent().scrollTop(element.parent().scrollTop() + (element.offset().top - element.parent().offset().top));
            }
          }
        });
      }
    };
  });
