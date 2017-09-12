(function(angular) {
  angular.module('app', ['portal']).controller('mainCtrl', function() {
    var $ctrl = this;

    $ctrl.isOpen = true;
    $ctrl.value = 'love';
  });
})(window.angular);
