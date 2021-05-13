# Camunda-poc
Camunda POC on tomcat version 7.15 with rapid custom plugins development environment

## Introduction
 Camunda version used: https://downloads.camunda.cloud/release/camunda-bpm/tomcat/7.15/.<br>
 Cockpit and Tasklists webapps follow same setup so all cockpit plugin examples will apply for tasklist but following appropriate changes from Tasklist plugin documentation.<br>
 We have customized on top cockpit angularJS sample to have single angularJs workspace project to develop multiple plugins simulateously.<br>
 Rollup is the bundler to generate all plugins inside `dist/` path

### Project setup
1. Create folder as workspace under `'camunda/app/cockpit/'` or `'camunda/app/tasklist/'` of camunda tomcat folders. e.g: dev-ng-custom-plugins.
2. Copy project structure from `'cockpit-app/dev-ng-custom-plugins'` or `'tasklist-app/dev-ng-custom-plugins'`
3. Run `npm i`
4. Run `npm run build` to see your plugin in `'/dist/components/'` path

### Plugin usage
1. In your Camunda Tomcat application go to `'camunda-bpm-tomcat-7.15.0\server\apache-tomcat-9.0.43\webapps\camunda\app\tasklist\scripts\config.js'`
2. Uncomment customScripts attribute in `config.js` and add the plugin path from the dist folder createed earlier.
3. Refresh you webapp on port 8080 to reflect the changes.

### Enhancements
1. `rollup-plugin-multi-input` is used to bundle multiple plugins at same time from same project.
1. We can add any valid npm dependency and bundle it.
2. For Angular2+ projects, `concat` can be used to create a single bundle file for plugin. https://github.com/camunda/camunda-bpm-examples/tree/master/cockpit/cockpit-angular-open-usertasks
3. Angular directive can also be written and activated following https://docs.camunda.org/manual/7.15/webapps/tasklist/configuration/#custom-scripts

 ### Links
 Links followed:<br>
 React sample blog [Click here](https://camunda.com/blog/2020/08/all-new-frontend-plugin-system-for-cockpit-starting-with-camunda-bpm-7-14/).<br>
 Cockpit Plugin docs [Click here](https://docs.camunda.org/manual/7.15/webapps/cockpit/extend/plugins/).<br>
 Cockpit Plugin samples [Click here](https://github.com/camunda/camunda-bpm-examples/tree/master/cockpit/).<br>
 TaskList Plugin docs [Click here](https://docs.camunda.org/manual/7.15/webapps/tasklist/tasklist-plugins/).<br>
 