# NgsGoogleAuth

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0. This is a basic library for creating a Google Sign-In button in your application. While simple in nature, it gives you control over the data being sent from Google. Mainly, you can decide return type for your data and handle logic accordingly.

## Documentation
Install this library with `npm install ngs-google-auth`.
Then in your preferred component, import it with `import {NgsGoogleAuthComponent} from "ngs-google-auth";`.
Finally, in the HTML template of the component, add `<ngs-google-auth [clientId]="'CLient ID'" [nonce]="'nonce'" [redirectUri]="'Redirect URI'"></ngs-google-auth>` where you want to see this button.

There are some additional functionalities present in the library that I will add in the documentation later.

## Code scaffolding

Run `ng generate component component-name --project ngs-google-auth` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngs-google-auth`.
> Note: Don't forget to add `--project ngs-google-auth` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngs-google-auth` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngs-google-auth`, go to the dist folder `cd dist/ngs-google-auth` and run `npm publish`.

## Running unit tests

Run `ng test ngs-google-auth` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
