(function(angular) {
  angular.module('portal', []).component('portal', {
    template:
      '<div class="detach__container" ng-class="[$ctrl.elementClass]" ng-transclude></div>',
    transclude: true,
    bindings: {
      to: '@',
      detach: '<',
      class: '<',
      elementClass: '@'
    },
    controller: function($scope, $element) {
      var $ctrl = this;
      var contentElm = $element[0].querySelector('.detach__container');

      function getTarget(targetId) {
        if (!targetId || targetId === 'body') {
          return document.body;
        }

        var selector = 'portal-target[name="' + targetId + '"]';
        return document.querySelector(selector);
      }

      function shouldDetach (detach) {
        return (typeof detach !== 'boolean') ? true : detach;
      }

      $scope.$watchGroup(['$ctrl.to', '$ctrl.detach'], function() {
        var parentElm = shouldDetach($ctrl.detach) ? getTarget($ctrl.to) : $element[0];
        parentElm.append(contentElm);
      });

      $scope.$on('$destroy', function() {
        contentElm.remove();
        contentElm = null;
      });
    }
  });
})(window.angular);
