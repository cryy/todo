# <img src="media/logo.png" alt="to-do" align="center" />

A simplistic to-do task React app. Uses [Material-UI](https://github.com/mui-org/material-ui) for UI components and [Recoil](https://github.com/facebookexperimental/Recoil) for state management.

View the app at [GitHub Pages](https://cryy.github.io/todo)

## Building
```
npm run build
```
You will need to adjust URLs if you want to deploy the app.


## Folder structure
```bash
├───app # Base app, includes index.html template
│   └───react
│       ├───components # Component folders with respective props
│       └───services
│           ├───stateService # Recoil state management
│           │   └───models
│           └───storageService # localStorage management
│               └───models
├───media #README media
└───node_modules

```