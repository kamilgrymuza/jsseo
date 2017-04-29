"use strict";



define('emberjs/app', ['exports', 'ember', 'emberjs/resolver', 'ember-load-initializers', 'emberjs/config/environment'], function (exports, _ember, _emberjsResolver, _emberLoadInitializers, _emberjsConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberjsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberjsConfigEnvironment['default'].podModulePrefix,
    rootElement: '#app-root',
    Resolver: _emberjsResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberjsConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('emberjs/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('emberjs/helpers/app-version', ['exports', 'ember', 'emberjs/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _emberjsConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _emberjsConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('emberjs/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('emberjs/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('emberjs/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'emberjs/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberjsConfigEnvironment) {
  var _config$APP = _emberjsConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('emberjs/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('emberjs/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('emberjs/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('emberjs/initializers/export-application-global', ['exports', 'ember', 'emberjs/config/environment'], function (exports, _ember, _emberjsConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_emberjsConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _emberjsConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_emberjsConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('emberjs/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('emberjs/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('emberjs/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("emberjs/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('emberjs/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('emberjs/router', ['exports', 'ember', 'emberjs/config/environment'], function (exports, _ember, _emberjsConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberjsConfigEnvironment['default'].locationType,
    rootURL: _emberjsConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('emberjs/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("emberjs/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "vBPkNuxs", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Berlin - the city of sin and Ember JS\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\nBerlin has a significant history and you'll find many landmarks which reflect this. Berlin was badly damaged in the Second World War, but later many edifices and constructions were restored. It is incredibly hard not to admire the stunning architect in Berlin. The Cathedral of Berlin is the biggest church inside the city, and it serves as an important center for the Protestant church of Germany. Its official name is Oberpfarr- und Domkirche zu Berlin. Once it had been the official cathedral of the Prussian Hohenzollern royal family. It was rebuilt in 1816-1822 adhering to a design by the Berlin designer Karl Friedrich Schinkel.\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\nThe Alte Nationalgalerie on Museum Island in Berlin it is a national gallery showcasing a wide range of top quality nineteenth century art including sculptures and paintings. Alte Nationalgalerie has been around since in 1861, when banker J.H.W. Wagenerleft his art collection to the king to inherit. A brand new building had been designed by Friedrich August Stler to place it with an architectural design style that includes late Classicism and early Neorenaissance. The Brandenburg Gate in German it is referred to as the Brandenburg Gate and is a monument situated adjacent to the edge between East and West Berlin.\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\nThe Brandenburg Gate it is a monumental gate integrated the eighteenth century as a symbol of peace. The wall separating East plus West Berlin, constructed by the East Germans in 1961, wasn't opened for free access in both directions until 1989. Since the fall of the Berlin Wall, the Brandenburg Gate became the symbol of the reunified Berlin. The Altes Museum was finished in 1830 and is an essential representation in the structure of Classicism. Designed from Karl Friedrich Schinkel, the building includes the Greek Stoa in Athens as a model. Originally constructed to show most of Berlin artwork selections, the Altes Museum has accommodated the Collection of Classical Antiquities since 1904.\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\nBetween 1943 plus 1945 fire severely damaged the building. \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"/ember/test/\"],[\"flush-element\"],[\"text\",\"Reconstruction work commenced and was finished in 1966\"],[\"close-element\"],[\"text\",\". Since 1998 the Collection of Classical Antiquities has displayed its Greek selection on the ground floor of the Altes Museum. The Victory Column is among the most famous monuments in Berlin. Work commenced from Heinrich Strack in 1864 to mark the Prussian victory in the Danish Prussian war. By the time it was opened on 2 Sept 1873 Prussia had likewise defeated Austria in the Austro Prussian War plus France in the Franco Prussian War, giving the statue a brand new status.\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "emberjs/templates/application.hbs" } });
});


define('emberjs/config/environment', ['ember'], function(Ember) {
  var prefix = 'emberjs';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("emberjs/app")["default"].create({"name":"emberjs","version":"0.0.0+"});
}
//# sourceMappingURL=emberjs.map
