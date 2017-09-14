var app = window.angular.module('app', ['portal']);

app.controller('mainCtrl', function($timeout) {
  var $ctrl = this;

  $ctrl.isOpen = false;
  $ctrl.counter = 0;

  $ctrl.text = 'Try changing this text from within the portal';
});
