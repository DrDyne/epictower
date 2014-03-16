'use strict';

describe('Service: Com', function () {

  // load the service's module
  beforeEach(module('epictowerApp'));

  // instantiate service
  var Com;
  beforeEach(inject(function (_Com_) {
    Com = _Com_;
  }));

  it('should do something', function () {
    expect(!!Com).toBe(true);
  });

});
