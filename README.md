## eslint-config-react - A sharable config for React

React and typescript specfic linting rules for ESlint. It abstracts away a lot of config and plugin that is generally used in feature projects.

## Installation
```
"dependencies": {
    "@libty-labs/eslint-config-react": "git+https://github.com/LIBRTY-LABS/eslint-config-react.git",
}
```
(Note: No need to install eslint, it is already done by this library)

## Configuration
After installation, create a .eslintrc.js file and add this:
```
module.exports = {
  extends: [
    '@libty-labs/eslint-config-react',
  ],
  parserOptions: {
    project: [<path to tsconfig.json file in quotes>]
  },
}
```

You can add other config and plugins.

### Overriding rules
Sometimes in our feature project, we might need to add/override some rules.
e.g: in this library, the `no-console` will give a warning. 
If we want to override in our project, by adding this in `.eslintrc.js` file.
``` 
rules:{
    'no-console':"error",
}
``` 

### Credits
A big thanks to all the open sourced eslint configs and plugins that we are using. Please support them 🚀
