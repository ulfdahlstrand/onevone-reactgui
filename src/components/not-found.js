var React = require('react');

module.exports = React.createClass({
  displayName: "NotFound",
  render: function () {
    return <div className="nowhere">
      <a title="Peter Fitzgerald [CC BY-SA 3.0 (http://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons" href="http://commons.wikimedia.org/wiki/File%3ALonely_road_to_nowhere.jpg"><img width="2048" alt="Lonely road to nowhere" src="//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lonely_road_to_nowhere.jpg/2048px-Lonely_road_to_nowhere.jpg"/></a> 
      <h1>This url leads to nowhere</h1>
    </div>;
  }
});
