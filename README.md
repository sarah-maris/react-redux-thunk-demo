# React/Redux/Thunk Demo TEST

This project was created as part of a walk-through to demonstrate how to use Thunk and Redux in a React app.

## Getting started

### Step 1:  Add Foursquare credentials
This app uses the Foursquare API.  To run it you'll need to obtain a ClientID and ClientSecret code from Foursquare.  You can sign up at **[Foursquare Developers](https://foursquare.com/developers/signup)**

Add the credentials to the `credentials-sample.js` file in the `helper` folder and save as `credentials.js`

### Step 2: Install the project framework and start the development server
In the project directory run:

### `yarn install && yarn start`

<br>
or if you prefer to use npm, run:  
### `npm install && npm start`
<br>
This will run the app in  development mode at:  **[http://localhost:3000](http://localhost:3000)**

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
