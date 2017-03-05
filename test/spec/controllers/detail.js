'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('playOnWeatherApp'));

  var DetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailCtrl = $controller('DetailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetailCtrl.awesomeThings.length).toBe(3);
  });
});
