/** @jsx React.DOM */


jest.dontMock('../component');
describe('Component', function() {
  it('is defined', function() {
    var React = require('react/addons'),
      TestUtils = React.addons.TestUtils,
      Entry = require('../component');

    var rendered = TestUtils.renderIntoDocument(<Entry />);

    expect(rendered).toBeDefined();
  });
});
