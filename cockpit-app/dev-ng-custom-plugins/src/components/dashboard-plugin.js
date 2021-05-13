
// import angular from "angular";
// import angular from '../shared/index';

var template = `
  <div ng-controller="newDashboardController" style="border: 1px solid black">
    <h2>Plugin: Angular Dashboard </h2>
    <button ng-click="showDashboardHandler()">Show</button>
  </div>`;

export default {
  id: "cockpit.newDashboard",
  pluginPoint: "cockpit.dashboard",
  priority: 9,
  render: node => {
    var newDashboardController = [
      "$scope",
      "$timeout",
      function ($scope, $timeout) {
        $scope.showDashboardHandler = function (event) {
          console.log('Button clicked from Cockpit\'s new Dashboard: dashboard-plugin.js');
        };
      }
    ];

    var ngModule = angular.module("cockpit.newDashboard", []);
    ngModule.controller(
      "newDashboardController",
      newDashboardController
    );

    node.innerHTML = template;

    angular.bootstrap(node, [ngModule.name]);
  },
  properties: {
    label: "New Cockpit Dashboard",
  }
};
