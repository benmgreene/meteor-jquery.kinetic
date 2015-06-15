'use strict';

Package.describe({
  name: 'benmgreene:jquery.kinetic',
  version: '2.0.6',
  summary: 'Add kinetic scrolling functionality to a container using mouse or touch devices',
  git: 'https://github.com/benmgreene/meteor-jquery.kinetic',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles('jquery.kinetic/jquery.kinetic.js', 'client');
});

