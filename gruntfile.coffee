module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON "package.json"

    eslint:
      src: [
        "src/**/*.jsx"
        "src/**/*.js"
      ]

    babel:
      dist:
        files:
          "dist/react-skycons.js": "src/react-skycons.jsx"

  require("load-grunt-tasks") grunt
  grunt.loadNpmTasks "gruntify-eslint"
