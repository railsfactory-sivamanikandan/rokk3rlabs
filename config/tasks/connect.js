module.exports = (config) => {
  "use strict";

  var modRewrite = require('connect-modrewrite');
  var serverStatic = require('serve-static');

  return {
    options: {
      port: 9000,
      hostname: 'localhost',
      livereload: 35729
    },
    livereload: {
      options: {
        middleware: function (connect) {
          return [
            modRewrite(['^[^\\.]*$ /index.html [L]']),
            serverStatic('.tmp'),
            connect().use(
              '/bower_components',
              serverStatic('./bower_components')
            ),
            connect().use(
              '/node_modules',
              serverStatic('./node_modules')
            ),
            connect().use(
              '/src/assets/css',
              serverStatic('./src/assets')
            ),
            serverStatic(config.app)
          ];
        }
      }
    },
    dist: {
      options: {
        base: 'public'
      }
    }
  };
};
