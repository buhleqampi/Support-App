 **Overview**

The application should allow users to log in, create support cases, view a dashboard with all created cases, and access their account information.

- Base
  - NextJS
  - TypeScript

- UI
  - [Fluent UI React v9](https://react.fluentui.dev/?path=/docs/concepts-developer-quick-start--page)

- Data
  - Mobx
  - useSwr

- Code Quality
  - ESLint
  - Prettier

- Deployment
  - server.js (assuming a deployment to Linux-based Azure Web App)

## **Additional features in this documentation:**

- Theming with Fluent UI React

- Paging system in NextJS


## Pre-requisites

1. VS Code [https://code.visualstudio.com/Download]()
2. Node [https://nodejs.org/en/download/]()

## **Setup**

Open package.json to see the following script:

## Scripts

```json
"scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "npm run build && node server.js",
        "lint": "eslint . --ext ts --ext tsx --ext js",
        "prepare": "npm install",
        "format": "prettier --write .",
        "type-check": "tsc --pretty --noEmit"
    }
```

These scripts refer to the different stages of developing an application:

- dev - Runs next dev which starts Next.js in development mode
- build - Runs next build which builds the application for production usage
- start - Runs build and then for starts  production server
- lint - Runs lint which sets up Next.js' with custom built ESLint configuration
- prepare - Runs the prepare lifecycle before running the package to install the husky
- format - Runs command to formats all file supported by Prettier in the current directory and its subdirectories.

## Pages

Next.js is built around the concept of pages. A page is a React Component exported from the .ts, or .tsx file in the pages directory.

Under the _src_ folder you will find the pages. These pages are associated with a route based on their file name. For example pages/todo.tsx is mapped to /todo.

## ESlint configuration

You will find the configuration file **.eslintrc.json** in the directory .

```json
"parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "env": {
        "es6": true,
        "browser": true,
        "jest": true,
        "node": true
    },
    
    "rules": {
}
```

Here are some of the options that you can configure in ESLint:

- Environments - which environments your script is designed to run in. Here we see the env parameter that supports the required environments.
- Rules - Rules set the parameters that are followed by the company  and at the required error level.
- Plugins - which third-party plugins define additional rules.  environments etc. for ESLint to use.

Refer for more information to [https://eslint.org/docs/user-guide/configuring/]()

## **Other recommendations**

- Next-Js - [https://nextjs.org/docs/getting-started]()
- Prettier configuration - [https://prettier.io/docs/en/configuration.html]()
- [A 2021 guide about structuring your Next.js project in a flexible and efficient way](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)
