/**
 * Gruntfile
 */

module.exports = function(grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Shell
    shell: {
      jekyllBuild: {
        command: 'jekyll build'
      }
    },

    // Connect
    connect: {
      server: {
        options: {
          port: 1337,
          base: '_site'
        }
      }
    },

    // Watch
    watch: {
      // Livereload
      livereload: {
        files: [
          '_config.yml',
          'config.rb',
          'index.html',
          '_layouts/**',
          '_posts/**',
          '_includes/**',
          '_work/**',
          'style.css',
          '_/data/**',
          'js/**'
        ],
        tasks: ['shell:jekyllBuild'],
        options: {
          livereload: true
        },
      },
      // CSS files for Compass
      compass: {
        files: ['style/**/*.{scss,sass}'],
        tasks: ['compass']
      }
    },

    // Compass
    compass:{
      dist:{
        options: {
          config: 'config.rb',
          force: true
        }
      }
    },

    // Uglify
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %> */',
        sourceMap: true,
        sourceMapName: 'js/sourcemap/main.map'
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/**/*.js']
        }
      }
    },

    // Concurrent
    concurrent: {
      target: {
        tasks: ['watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    'ftp-deploy': {
      build: {
        auth: {
          host: 'ftp.johnie.se',
          port: 21,
          authKey: 'key1'
        },
        src: '_site/',
        dest: 'dev.johnie.se/public_html/portfolio/',
        exclusions: ['_site/**/.DS_Store', '_site/**/main.TODO',]
      }
    }
  });

  grunt.registerTask('scripts', ['uglify']);

  grunt.registerTask('deploy', ['ftp-deploy']);

  grunt.registerTask('default', ['shell', 'connect', 'concurrent'])
};
