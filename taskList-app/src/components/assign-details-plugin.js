// Angular Plugin: Task Details
var template = `
    <div ng-controller="assignTaskDetailController as asgnvm" style="border: 1px solid black">
    <h1>Plugin: Assign task detail!</h1>
    <button ng-click="fetchHandler()">Get Users</button>

    <div style="font-size: 20px">
        <label for="repeatSelect"> Reassign User: </label>
        <select name="repeatSelect" id="repeatSelect" ng-model="asgnvm.data.model">
            <option ng-repeat="option in asgnvm.data.availableUsers" value="{{option.id}}">
            {{option.firstName}}: {{option.email}}
            </option>
        </select>
    </div>

    <button ng-click="fetchHandler()">Confirm Reassign</button>
    
    </div>
  `; // ng-if="asgnvm.data.availableUsers.length>0" // ng-if="asgnvm.resultsFound"

export default {
    id: 'tasklist.assignDetails',
    pluginPoint: 'tasklist.task.detail',
    priority: 5,
    render: (node, { camundaApi, api }) => {
        var assignTaskDetailController = [
            "$scope", "$http", "$timeout", "$q",
            function ($scope, $timeout, $http, $q) {

                var vm = this;
                vm.orderProp = 'age';
                vm.mock = true;
                vm.usersList = []; // mockAPIRespInit;
                vm.data = {
                    assignedUser: null,
                    availableUsers: []
                };
                vm.resultsFound = false;
                var deferred = $q.defer();
                console.log('INIT', vm.usersList, camundaApi, api);

                $scope.fetchHandler = function (event) {
                    var base = document.querySelector("base");
                    console.log('Btn clicked : assign-plugin.js', base);
                    $scope.fetchBackendData();
                };

                $scope.fetchBackendData = async function () {

                    console.log('before fetch');

                    fetch("http://localhost:8080/camunda/api/engine/engine/default/user?firstResult=0&maxResults=500&sortBy=userId&sortOrder=asc", {
                        headers: { "Accept": "application/json" },
                    })
                        .then(response => response.clone().json())
                        .then(function successCallback(res) {
                            console.log('FETCH SUCESS', res);
                            vm.usersList = res;
                            vm.data.availableUsers = res;
                            vm.resultsFound = true;
                        }, function errorCallback(er) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            console.log('FETCH REJECT', er);
                        }).catch((err) => {
                            console.log('FETCH CAUGHT', err);
                        });

                    // $http({
                    //     method: 'GET',
                    //     url: 'http://localhost:8080/camunda/api/engine/engine/default/user?firstResult=0&maxResults=500&sortBy=userId&sortOrder=asc'
                    // }).then(function successCallback(res) {
                    //     console.log('FETCH SUCESS', res);
                    //     vm.usersList = res;
                    //     vm.data.availableUsers = res;
                    //     vm.resultsFound = true;
                    // }, function errorCallback(response) {
                    //     // called asynchronously if an error occurs
                    //     // or server returns response with an error status.
                    //     console.log('FETCH ERROR', response);
                    // });
                    console.log('after fetch');
                };
            }
        ];

        var ngModule = angular.module("tasklist.assignDetails", []);
        ngModule.controller(
            "assignTaskDetailController",
            assignTaskDetailController
        );

        node.innerHTML = template;

        angular.bootstrap(node, [ngModule.name]);
    },
    properties: {
        label: 'PG: Assign'
    }
};

// Users list API
// http://localhost:8080/camunda/api/engine/engine/default/user?firstResult=0&maxResults=50&sortBy=userId&sortOrder=asc

var mockUsersAPI = [
    { "id": "demo", "firstName": "Demo", "lastName": "Demo", "email": "demo@camunda.org" },
    { "id": "john", "firstName": "John", "lastName": "Doe", "email": "john@camunda.org" },
    { "id": "mary", "firstName": "Mary", "lastName": "Anne", "email": "mary@camunda.org" },
    { "id": "peter", "firstName": "Peter", "lastName": "Meter", "email": "peter@camunda.org" }
]

// http://localhost:8080/camunda/api/engine/engine/default/task/79e97e62-b346-11eb-831c-04ed33b174bb/assignee
{"userId":"john"}