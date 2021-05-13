
// import angular from "angular";
// import * as angular from '../shared/index';
// import angular from '../shared/index';

var template = `
  <div ng-controller="navShortCutController"">
  PG:New Route2
  </div>`;

export default {
    id: "cockpit.newNavShrotcut",
    pluginPoint: "cockpit.navigation",
    priority: 9,
    render: node => {
        var navShortCutController = [
            "$scope",
            "$timeout",
            function ($scope, $timeout) {
                console.log('Nav plugin loaded: navigation-plugin.js');
                // $scope.goToNewRoute = function (event) {
                //     console.log('Button clicked from Cockpit\'s new route: navigation-plugin.js');
                // };
            }
        ];

        var ngModule = angular.module("cockpit.newNavShrotcut", []);
        ngModule.controller(
            "navShortCutController",
            navShortCutController
        );

        node.innerHTML = template;

        angular.bootstrap(node, [ngModule.name]);
    },
    properties: {
        label: "New Cockpit Navigation",
        path: "/new-route"
    }
};
