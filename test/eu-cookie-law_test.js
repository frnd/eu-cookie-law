(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#euCookieLaw', {
    // This will run before each test in this module.
    setup: function() {
        jQuery(document).ready($.euCookieLaw({readMoreLink: '../read-more'}));
        this.elems = $('.eu-cookies-popup');
    }
  });

  test('is popup present', function() {
    expect(1);
    strictEqual(this.elems.length, 1, 'should be present');
  });

}(jQuery));
