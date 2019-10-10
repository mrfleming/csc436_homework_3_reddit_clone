# RedditApp

## Homework Assignment 3

I wrote the stories in the text file.  I put it in the assests folder because I thought early on the stories would be used in the actual application.  I was able to get the button for the admin to appear with *ngIf.  I did also get the button to fire the event which sends it to the last item in the list.  I had it go through all of the articles, pull out the vote numbers, then sort them and pull the smallest one.  For some reason this only seems to work on the initial load and when you change the vote counts of the other articles, this information is not seen by the flag button.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
