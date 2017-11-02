module.exports = (config) => {
  "use strict";
  return {
    options: { livereload: true },
    css_structure: {
      files: ["<%= config.dev %>/<%= config.scss %>/**/{,*/}*.{scss,sass}"],
      tasks: ["compass:dev", "copy:css_static", "clean:tmp", "wiredep"]
    },

    css_components: {
      files: ["<%= config.dev %>/app/components/**/{,*/}*.{scss,sass}"],
      tasks: ["compass:components", "copy:css_components", "clean:tmp", "wiredep"]
    },

    css_common: {
      files: ["<%= config.dev %>/app/common/**/{,*/}*.{scss,sass}"],
      tasks: ["compass:common", "copy:css_commons", "clean:tmp", "wiredep"]
    },

    css_static: {
      files: ["<%= config.dev %>/app/static/**/{,*/}*.{scss,sass}"],
      tasks: ["compass:static", "copy:css_static", "clean:tmp", "wiredep"]
    },

    whitelabel: {
      files: ["whitelabel/**/{,*/}*.{scss,sass}"],
      tasks: ["merge-copy"]
    },

    js: {
      files: [
        "gruntfile.js",
        "<%= config.dev %>/<%= config.js %>/**/{,*/}*.js"
      ],
      //tasks: ["jshint.all"] =O
    },
    html: {
      files: [
        "/*.{html,htm,shtml,shtm,xhtml,php,jsp,asp,aspx,erb,ctp}"
      ]
    },
    bower: {
      files: ['bower.json'],
      tasks: ['wiredep']
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        '<%= config.dev %>/**/*.{html,php}',
        '.tmp/{,*/}*.css',
        '<%= config.dev %>/<%= config.img %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };
};
