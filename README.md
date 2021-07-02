# OldMacDonald

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

## To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## The project has the following structure:

1. modules
   1.1 home module with dashboard component
    - main routing with lazy loading for inner modules
      1.2 tasks module with two components for each task
    - routing with the route for each task - /auto and /manual
2. shared

-   module which imports all outer modules and components for the application. Also, it declares and exports all shared components, pipes, models, interfaces and third-party modules. All modules import SharedModule, allowing us to reduce the number of imports.
-   a directory for each shared element - components, models, interfaces, pipes.
    2.1 components
    -   three shared components - for a page header, for one verse, and a song with a few verses
        2.2 interfaces
    -   one interface for Animal with property species and method getSound()
        2.3 models
    -   models for each species of animal and every model implements interface Animal with specific species and different sound
        2.4 pipes
    -   a pipe, which checks if a word starts with a vowel. It is checking if animal species or animal sounds start with vowels and showing either ‘an’ or ‘a’.
