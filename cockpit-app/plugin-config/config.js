export default {
    // // change the app name and vendor
    // app: {
    //   name: 'Operations',
    //   vendor: 'Company'
    // },
    customScripts: [
      // If you have a folder called 'my-custom-script' (in the 'cockpit' folder)
      // with a file called 'customScript.js' in it
      // 'my-custom-script/customScript'
      // 'scripts/custom-cockpit-plugin'
      'dev-custom-plugins/cat-plugin/cat-plugin',
      'dev-custom-plugins/react-rollup-greetings/dist/plugin',
      // 'dev-custom-plugins/angularjs-rollup-search-processes/dist/plugin',
      // PURE ANGULAR PLUGINS PROJECT
      'dev-ng-custom-plugins/dist/components/navigation-plugin',
      'dev-ng-custom-plugins/dist/components/route-plugin',
      'dev-ng-custom-plugins/dist/components/dashboard-plugin',
      'dev-ng-custom-plugins/dist/components/search-process-plugin',
    ],
    // requireJsConfig: {
    //   // AngularJS module names
    //   ngDeps: ['ui.bootstrap'],
    //   // RequireJS configuration for a complete configuration documentation see:
    //   // http://requirejs.org/docs/api.html#config
    //   deps: ['jquery', 'custom-ui'],
    //   paths: {
    //     // if you have a folder called `custom-ui` (in the `cockpit` folder)
    //     // with a file called `scripts.js` in it and defining the `custom-ui` AMD module
    //     'custom-ui': 'custom-ui/scripts'
    //   }
    // },
    // historicActivityInstanceMetrics: {
    //   adjustablePeriod: true,
    //   //select from the default time period: day, week, month, complete
    //   period: {
    //     unit: 'week'
    //   }
    // },
    // runtimeActivityInstanceMetrics: {
    //   display: true
    // },
    // 'locales': {
    //   'availableLocales': ['en', 'de'],
    //   'fallbackLocale': 'en'
    // },
    // skipCustomListeners: {
    //   default: true,
    //   hidden: false
    // },
    // skipIoMappings: {
    //   default: true,
    //   hidden: false
    // },
    // 'batchOperation' : {
    //   // select mode of query for process instances or decision instances
    //   // possible values: filter, search
    //   'mode': 'filter',
    //
    //   // select if Historic Batches should be loaded automatically when navigating to #/batch
    //   'autoLoadEnded': true
    // },
    // bpmnJs: {
    //   moddleExtensions: {
    //     // if you have a folder called 'my-custom-moddle' (in the 'cockpit' folder)
    //     // with a file called 'camunda.json' in it defining the 'camunda' moddle extension
    //     camunda: 'my-custom-moddle/camunda'
    //   },
    //   additionalModules: [
    //     // if you have a folder called 'my-custom-module' (in the 'cockpit' folder)
    //     // with a file called 'module.js' in it
    //     'my-custom-module/module'
    //   ],
    // },
    // defaultFilter: {
    //   historicProcessDefinitionInstancesSearch: {
    //     lastDays: 5,
    //     event: 'started'
    //   }
    // },
    // csrfCookieName: 'XSRF-TOKEN',
    // disableWelcomeMessage: false,
    // userOperationLogAnnotationLength: 5000,
    // previewHtml: true
  };