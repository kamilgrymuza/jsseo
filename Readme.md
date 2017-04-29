# JS SEO Experiments

This repository contains the code for an SEO experiment designed by
[Kamil Grymuza (JS development)](https://www.linkedin.com/in/kamilgrymuza/) &
[Bartosz Goralewicz (JS SEO)](https://www.linkedin.com/in/goralewicz).

The purpose of this experiment is to test how well Google can crawl JavaScript pages utilising
different frameworks and libraries.


## Included experiments

* React JS (inline and external script)
* Angular versions 1 & 2
* Vue JS
* Ember JS
* jQuery (inline & external script)
* jQuery AJAX call
* plain JavaScript (inline & external)

## Building the Ember project

Ember's output is checked in, but if you want to update the project you need to have
[Ember CLI](https://guides.emberjs.com/v2.12.0/getting-started/quick-start/#toc_install-ember)
installed.

Once you do you can:

```
cd src/emberjs
ember build
```

## Building the Angular 2 (bunlded) project

Angular output is also checked in, but if you have the
[Angular CLI](https://cli.angular.io/) you can use it to update the bundled version of the
Angular 2 experiment.

```
cd src/angular2bundled
ng build -prod
```

and the output in the root `/angular2bundled/` directory will be updated (it's a symlink).
