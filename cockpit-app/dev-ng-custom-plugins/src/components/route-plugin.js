
// import angular from "angular";
// import angular from '../shared/index';

var template = `
  <div ng-controller="routeViewController">
    <h1>New Route<h1>
    This is a New Route
    <button ng-click="clickHandler()">Click Me</button>
  </div>`;

export default {
  id: "cockpit.newRouteModule",
  pluginPoint: "cockpit.route",
  priority: 9,
  render: node => {
    var routeViewController = [
      "$scope",
      "$timeout",
      function ($scope, $timeout) {
        $scope.clickHandler = function (event) {
          console.log('Button clicked from Cockpit\'s new route: route-plugin.js');
        };
      }
    ];

    var ngModule = angular.module("cockpit.newRouteModule", []);
    ngModule.controller(
      "routeViewController",
      routeViewController
    );

    node.innerHTML = template;

    angular.bootstrap(node, [ngModule.name]);
  },
  properties: {
    // label: "New Cockpit Route",
    path: "/new-route"
  }
};
