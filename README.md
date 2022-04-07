# Base source React-Native use Hook and Typescript

> Help manage code better
- Branch: use_connect
- Branch: use_useDispatch_useSelector

## Table of Contents

- [Build App](#build)
- [Library Use](#library)
- [Structure Project](#structure)

## Build

Install library:

```bash
$ yarn install
```

Build ios:

```bash
$ yarn pod-ios
$ yarn run-ios
```

Build android:

Create file local.properties in folder android, add "sdk.dir=..."

```bash
$ yarn run-android
```

## Library

- react-navigation [`Link`](https://github.com/react-navigation/react-navigation).
- axios [`Link`](https://github.com/axios/axios).
- react-redux [`Link`](https://github.com/reduxjs/react-redux).
- redux-persist [`Link`](https://github.com/rt2zz/redux-persist).
- async-storage [`Link`](https://github.com/react-native-async-storage/async-storage).
- encrypted-storage [`Link`](https://github.com/emeraldsanto/react-native-encrypted-storage).
- localization [`Link`](https://github.com/stefalda/ReactNativeLocalization).

## Structure

- [Common](#common)
  - [Components](#components)
  - [Constants](#constants)
- [Features](#features)
- [Navigation](#navigation)
- [Resources](#resources)
  - [Assets](#assets)
  - [Fonts](#fonts)
  - [Localization](#localization)
  - [Theme](#theme)
- [Services](#services)
- [Store](#store)
- [Utilities](#utilities)

### Common

- Where files are shared in the project.

  #### Components

  - A place for commonly used components in the features
  - Divide Components into groups with similar characteristics

  #### Constants

  - Dimens: Common dimension in ui design
  - Limits: Define text box character limit
  - Spacing: Common spacing in ui design
  - Type: Universal type used in all applications
  - Typography: Define typography used in all applications

### Features

- Manage the UI and logic of the screens.

### Navigation

- Manage the app's navigator.

### Resources

- Manage houses static files (e.g images, color) used in the application.

  #### Assets

  - Where the image static files are located.

  #### Fonts

  - Where the font static files are located.

  #### Localization

  - Where the language static files are located.

  #### Theme

  - Where the theme static files are located.

### Services

- This directory manages logic related to external API communication.

### Store

- My point is that only data that is used in common across multiple monitors will be saved to redux. So I separate redux from screen, to easily manage action and state of redux

### Utilities

- Where to manage utility files (function).

## Config

> Briefly go over the various config files used in this project

- tsconfig.json: These options relate to how your TypeScript or JavaScript project is set up.
- babel.config.js: Configure import files for the project.
- .eslintrc.js: This is the configuration used to set the rule code in the project. Includes relevant configuration for use with Typescript and Prettier.
- .prettierrc.js: The config for the Prettier code formatter.
