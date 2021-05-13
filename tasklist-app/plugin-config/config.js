export default {
    // change the app name and vendor
    // app: {
    //   name: 'Todos',
    //   vendor: 'Company'
    // },
    //
    // configure the date format
    // "dateFormat": {
    //   "normal": "LLL",
    //   "long":   "LLLL"
    // },
    //
    // "locales": {
    //    "availableLocales": ["en", "de"],
    //    "fallbackLocale": "en"
    //  },
    customScripts: [
        // If you have a folder called 'my-custom-script' (in the 'tasklist' folder)
        // with a file called 'customScript.js' in it
        // 'my-custom-script/customScript'
        // 'scripts/cats',
        'dev-ng-custom-plugins/dist/components/docs-details-plugin',
        'dev-ng-custom-plugins/dist/components/assign-details-plugin'
    ],
    // requireJsConfig: {
    //   // AngularJS module names
    //   ngDeps: ['ui.bootstrap'],
    //   // RequireJS configuration for a complete configuration documentation see:
    //   // http://requirejs.org/docs/api.html#config
    //   deps: ['jquery', 'custom-ui'],
    //   paths: {
    //     // if you have a folder called `custom-ui` (in the `scripts` folder)
    //     // with a file called `scripts.js` in it and defining the `custom-ui` AMD module
    //     'custom-ui': 'custom-ui/scripts'
    //   }
    // },
    // csrfCookieName: 'XSRF-TOKEN',
    // disableWelcomeMessage: false,

    shortcuts: {
        claimTask: {
            key: 'ctrl+alt+c',
            description: 'claims the currently selected task'
        },
        focusFilter: {
            key: 'ctrl+shift+f',
            description: 'set the focus to the first filter in the list'
        },
        focusList: {
            key: 'ctrl+alt+l',
            description: 'sets the focus to the first task in the list'
        },
        focusForm: {
            key: 'ctrl+alt+f',
            description: 'sets the focus to the first input field in a task form'
        },
        startProcess: {
            key: 'ctrl+alt+p',
            description: 'opens the start process modal dialog'
        }
    }
};