var Hello = React.createClass({
  render: function() {
    var contents = [
      React.createElement('h2', null, 'Visiting Sydney - best place on earth to learn React (external)'),
      React.createElement('p', null, "A trip to Australia isn't complete with no visit to the world renowned attractions, places that place Australia on the map. In every State and Territory perhaps a visitor will find good destinations for tourist and accommodation to match every budget. From natural wonders to man made structures, there's plenty to see and do. One of Australia most recognisable attractions, the stunning white sails of the Sydney Opera House stand overlooking the harbour. Opened in 1973 it houses over 3 thousand performances a year. Take perhaps a guided tour and admire the distinctive architecture, or better yet, book a seat to get perhaps a performance of either the opera, the ballet, the symphony orchestra or perhaps a play."),
      React.createElement('p', null, "Another milestone that visitors immediately recognized as Australia's, the Sydney harbor Bridge it is also known as The Coat Hanger. Opened in 1932 it stands a hundred and 30 four meters above the harbour at its highest level. Connecting the North and southern shores of Sydney for both vehicle, bicycle, rail and base journey, you now may scale the bridge steel framework. The Sydney Harbour Bridge climb was made available to the public since 1998. There are very different climbs available and is one among Australia's top attractions for tourist. Formerly known as Ayers Rock, Uluru it is the world's biggest single piece of rock. "),
      React.createElement('p', null, "Similar to an iceberg perhaps a lot of its mass it is hidden under the ground, however it stands 3 hundred and forty eight metres high. Guided walking tours can be found around its border. Once you might scale the rock, but it's now forbidden due to conservation. Uluru provides wonderful photo opportunities as the stone seems to change color from sunrise to sunset, and once it rains. The Great Barrier Reef it is the only living structure that may be seen from space as it stretches over 3 hundred thousand sq kilometre down the shore of Queensland. The coral reef it is home to a big variety of tropics fish, marine life and beautiful colored coral. "),
      React.createElement('p', {dangerouslySetInnerHTML: {__html: "It's a major <a href='/react-external/test/'>traveller destination</a> and is available from many portions of the Queensland coast. Tourists may stay in a mainland hotel or among the numerous island resorts. Located in South Australia, Cooper Pedy was initially settled in 1915 with the opening of an Opal mine. A distinctive location, the region it is devoid of trees, and most of its inhabitants live in houses underneath the ground. In the past, when there is no air conditioning, individuals built these undercover houses to escape the heat. Today the practice carries on, and visitors can stay in perhaps a motel underneath the ground."}})
    ];
    return React.createElement(
      'div', null, contents
    );
  }
});

ReactDOM.render(
  React.createElement(Hello, {}, null),
  document.getElementById('app-root')
);
