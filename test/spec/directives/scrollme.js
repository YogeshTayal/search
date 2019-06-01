'use strict';

describe('Directive: scrollMe', function () {

  // load the directive's module
  beforeEach(module('searchApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scroll-me></scroll-me>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollMe directive');
  }));
});
