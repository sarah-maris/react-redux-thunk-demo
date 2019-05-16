# React/Redux/Thunk Demo TEST

This project was created as part of a walk-through to demonstrate how to use Thunk and Redux in a React app.

## Getting started

### Step 1: Add Foursquare credentials

This app uses the Foursquare API. To run it you'll need to obtain a ClientID and ClientSecret code from Foursquare. You can sign up at **[Foursquare Developers](https://foursquare.com/developers/signup)**

Add the credentials to the `credentials-sample.js` file in the `helper` folder and save as `credentials.js`

### Step 2: Install the project framework and start the development server

In the project directory run:

### `yarn install && yarn start`

<br>
or if you prefer to use npm, run:

### `npm install && npm start`

<br>

This will run the app in development mode at **[localhost:3000](http://localhost:3000/)**

## Hosted demo

A live version of the demo is available at **[react-redux-demo.surge.sh/](http://react-redux-demo.surge.sh/)**

The live version has Redux DevTools enabled so you can see how the Redux store changes as you interact with the app in the Chrome browser. If you do not have the Redux DevTools Chrome extension installed you can get it at **[Chrome Web Store: Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)**

## Basic File Structure

```
project folder
│
├── public
│    └── index.js
├── src
│   ├── actions
│   │   └── index.js
│   ├── components
│   │   ├── App.js
│   │   ├── Categories.js
│   │   ├── Locations.js
│   │   └── RestaurantList.js
│   ├── css
│   │    └── app.css
│   ├── helpers/utils
│   │   ├── apis.js
│   │   ├── credentials.js
│   │   └── data.js
│   ├── images
│   ├── middleware
│   │   ├── logger.js
│   │   └── index.js
│   └── reducers
│     └── index.js
└── README.md
```

## Resources:

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
