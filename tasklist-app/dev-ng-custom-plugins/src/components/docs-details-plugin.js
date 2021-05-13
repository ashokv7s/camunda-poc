
// import angular from "angular";
// import angular from '../shared/index';

import fileDownload from 'js-file-download';

const mockAPIRespInit = [
  {
    "age": 13,
    "id": "motorola-defy-with-motoblur",
    "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
    "snippet": "Are you ready for everything life throws your way?"
  }
];

const mockAPIResp = [
  {
    "age": 13,
    "id": "motorola-defy-with-motoblur",
    "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
    "snippet": "Are you ready for everything life throws your way?"
  },
  {
    "age": 3,
    "id": "applei-iphone-12-pro",
    "name": "Apple Iphone\u2122 12 Pro\u2122",
    "snippet": "Are you ready for everything life throws your way?"
  }
];

var template = `
  <div ng-controller="docsTaskDetailController as dcvm" style="border: 1px solid black">
    <h1>Plugin: Documents task detail!</h1>
    <p>Fetching image from cats api <a>http://thecatapi.com/api/images/get?size=medium</a></p>
    <img src="https://cdn2.thecatapi.com/images/2jPAIyDIJ.png" width="400" />
    <br>
    <p>
      Fetching docs/ data from api <a>http://api.weatherstack.com/current</a> 
      OR <a>http://phones.phonelist</a> </p>
    <div>
      <button ng-click="fetchBackendData()">Fetch</button>
      <button ng-click="downloadHandler()">Download</button>
    </div>
    <!-- GARG{{dcvm.results.length}} -->
    <h4> Fetched Data: <h4>
    <ul>
      <li ng-repeat="phone in dcvm.results">
        <span>{{phone.id}} :: {{phone.name}}</span>
      </li>
    </ul>
  </div>
  `;

export default {
  id: 'tasklist.docsDetails',
  pluginPoint: 'tasklist.task.detail',
  priority: 5,
  render: (node) => {
    var docsTaskDetailController = [
      "$scope",
      "$http",
      "$timeout",
      function ($scope, $timeout, $http) {

        var vm = this;
        vm.orderProp = 'age';
        vm.mock = false;
        vm.results = []; // mockAPIRespInit;
        console.log('INIT', vm.results);

        $scope.fetchBackendData = function (event) {
          console.log('Button clicked from taskList\'s new task details: task-details-plugin.js', $http);

          // $http.get('shared/phones-stub.json').then(function (response) {
          //   vm.phones = response.data;
          // }).catch((er) => {
          //   console.log('Stupendify', er);
          // });

          console.log('before fetch');
          if (!vm.mock) {
            fetch("http://api.weatherstack.com/current?access_key=087a1de2a337e6fa03bead7498857be1&query=New%20York", { // shared/phones-stub.json
              headers: { "Accept": "application/json" },
            }).then(async (res) => {
              console.log('FETCH SUCESS', res);
              $scope.createTempJsonFile(res);
            }).catch((er) => {
              console.log('FETCH ERROR', er);
            });
          } else {
            $scope.createTempJsonFile(mockAPIResp);
            console.log('FETCH MOCKED', mockAPIResp, vm);
          }
          console.log('after fetch');
        };

        $scope.downloadHandler = function (event) {
          console.log('Download Btn clicked : task-details-plugin.js');
          fileDownload(vm.results, 'test.json');
        }

        $scope.createTempJsonFile = function (data) {
          vm.results = data;
        }
      }
    ];

    var ngModule = angular.module("tasklist.docsDetails", []);
    ngModule.controller(
      "docsTaskDetailController",
      docsTaskDetailController
    );

    node.innerHTML = template;

    angular.bootstrap(node, [ngModule.name]);
  },
  properties: {
    label: 'PG: Documents'
  }
};

