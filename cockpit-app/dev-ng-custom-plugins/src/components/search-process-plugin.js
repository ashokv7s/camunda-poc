// import angular from "angular";
// import angular from './shared/index';

var template = `
  <div ng-controller="searchProcessViewController">
  <section class="processes-dashboard" ng-class="{'section-collapsed': !activeSection}">
  <div class="inner">
  <button tooltip="Toggle this section" class="section-toggle btn btn-link btn-sm" ng-click="toggleSection()">
  <span class="glyphicon" ng-class="{'glyphicon-menu-down': !activeSection, 'glyphicon-menu-up': activeSection}"></span></button>
  <h2>PG: Search Process By Process Instance Id</h2>
  <div ng-if="activeSection"><br/>Enter a Process Instance Id: <input ng-keydown="pressEnter($event)" id="processInstanceId" ng-model="processInstanceId" type="text" size="80"/> 
  <a id="searchProcessGo" href="#/process-instance/{{processInstanceId}}"><button>Search</button></a></div>
  </div></section>
  </div>`;

var plugin = {
  id: "cockpit.searchProcess",
  pluginPoint: "cockpit.processes.dashboard",
  priority: 9,
  render: node => {
    var searchProcessViewController = [
      "$scope",
      "$timeout",
      function ($scope, $timeout) {
        $scope.pressEnter = function (event) {
          if (event.keyCode === 13) {
            $timeout(function () {
              document.querySelector("#searchProcessGo").click();
            }, 0);
          }
        };

        $scope.activeSection = true;

        $scope.toggleSection = function toggleSection() {
          $scope.activeSection = !$scope.activeSection;
        };
      }
    ];

    var ngModule = angular.module("cockpit.searchProcess", []);
    ngModule.controller(
      "searchProcessViewController",
      searchProcessViewController
    );

    node.innerHTML = template;

    angular.bootstrap(node, [ngModule.name]);
  },
  properties: {
    label: "Search Processes"
  }
};

export default plugin;
