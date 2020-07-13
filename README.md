# Ionic Design Patterns

[![](https://img.shields.io/circleci/project/github/pxblue/ionic-design-patterns/master.svg?style=flat)](https://circleci.com/gh/pxblue/ionic-design-patterns/tree/master)

This repository holds the source code examples for [PX Blue design patterns](https://pxblue.github.io/patterns), written in Ionic (Angular). The code is organized to make it easy to copy and paste the examples into your own projects.

## Current Patterns

| Pattern                                                                        | Description                                                                                                                                                                                  | Interactive Demo                                                                                                                                                                 |
| ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Action List](https://pxblue.github.io/patterns/lists)                         | A list with actions available on individual list items                                                                                                                                       | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/lists/action-list/index.tsx&initialpath=action-list)                      |
| [Basic Bottom Sheet](https://pxblue.github.io/patterns/overlay)                | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing global actions that affect the whole page. | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/overlays/basic-bottom-sheet/index.tsx&initialpath=basic-bottom-sheet)     |
| [Collapsible App Bar](https://pxblue.github.io/patterns/appbar)                | At the top of the page, the appbar is large, but as you scroll, it changes to a standard appbar.                                                                                             | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/app-bar/collapsible-app-bar/index.tsx&initialpath=collapsible)            |
| [Complex Bottom Sheet](https://pxblue.github.io/patterns/overlay)              | At the top of the page, the app bar has a 3dot icon on right. When clicking on 3dot icon bottomsheet slides up from bottom of the page, revealing filters that affect the whole page.        | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/overlays/complex-bottom-sheet/index.tsx&initialpath=complex-bottom-sheet) |
| [Data List](https://pxblue.github.io/patterns/lists)                           | A basic list dynamically built from a JSON data object.                                                                                                                                      | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/lists/data-list/index.tsx&initialpath=data-list)                          |
| [Dynamic Stepper](https://pxblue.github.io/patterns/steppers)                  | A dynamic stepper that allows the user to create an arbitrary number of steps for a procedure.                                                                                               | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/dynamic-stepper/index.tsx&initialpath=dynamic-stepper)                    |
| [Form Validation](https://pxblue.github.io/patterns/forms)                     | Varies types of form validation, such as verifying phone number, email address, character length, and password.                                                                              | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/form-validation/index.tsx&initialpath=form-validation)                    |
| [Internationalization](https://pxblue.github.io/patterns/internationalization) | A simple shopping app that allows the user to switch between the different languages including the languages that are right to left.                                                         | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/i18n/index.tsx&initialpath=i18n)                                          |
| [Loading States](https://pxblue.github.io/patterns/empty-states)               | Displays skeleton placeholder elements while content is loading.                                                                                                                             | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/loading-states/index.tsx&initialpath=loading-states)                      |
| [Multiselect List](https://pxblue.github.io/patterns/lists)                    | A multiselect list with group actions.                                                                                                                                                       | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/lists/multiselect-list/index.tsx&initialpath=multiselect-list)            |
| [Responsive Table](https://pxblue.github.io/patterns/lists)                    | A responsive table that works on larger screens and collapse the data into list at mobile size.                                                                                              | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/lists/responsive-table/index.tsx&initialpath=responsive-table)            |
| [Search Bar](https://pxblue.github.io/patterns/appbar)                         | At the top of the page, the app bar has a search icon on the right. After clicking on the search icon, the search bar slides in from the right of the app bar.                               | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/app-bar/search-bar/index.tsx&initialpath=search)                          |
| [Sortable List](https://pxblue.github.io/patterns/lists)                       | A sortable list with drag handles.                                                                                                                                                           | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/lists/sortable-list/index.tsx&initialpath=sortable-list)                  |
| [Status List](https://pxblue.github.io/patterns/lists)                         | A basic list with status stripes for list items.                                                                                                                                             | [CodeSandbox](https://codesandbox.io/s/github/pxblue/ionic-design-patterns/tree/master?file=/src/pages/lists/status-list/index.tsx&initialpath=status-list)                      |

## Running Locally

```
git clone https://github.com/pxblue/ionic-desing-patterns -b ionic
cd ionic-design-patterns
yarn && ionic serve
```
To run on a device, add the platform then build and run the project:
```
ionic cordova resources
ionic cordova platform add [android|ios]
ionic cordova build [android|ios]
ionic cordova run [android|ios]
```
For additional information read our [Ionic Guide](https://pxblue.github.io/development/frameworks-mobile/ionic) and our [Environment Setup](https://pxblue.github.io/development/environment)

Then you may run `yarn && yarn start` to start a local server.

## Folder Structure

All our design patterns are located inside `/src/pages`.
