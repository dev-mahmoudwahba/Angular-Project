# AngularProject
## subject behaviour service.
### BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable. The unique features of BehaviorSubject are:It needs an initial value as it must always return a value on subscription even if it hasn't received a next()Upon subscription, it returns the last value of the subject. A regular observable only triggers when it receives an onnextat any point, you can retrieve the last value of the subject in a non-observable code using the getValue() method.Unique features of a subject compared to an observable are:It is an observer in addition to being an observable so you can also send values to a subject in addition to subscribing to it.In addition, you can get an observable from behavior subject using the asObservable() method on BehaviorSubject.Observable is a Generic, and BehaviorSubject is technically a sub-type of Observable because BehaviorSubject is an observable with specific qualities.




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
