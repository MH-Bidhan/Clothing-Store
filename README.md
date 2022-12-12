# Crown Clothing E-Commerce

This is a semi functional single page E-commerce app created with React JS and Firebase. This is a personal project that mimics most of the functionalities of an E-commerce app.

[Visit the live site](https://crownclothingecommerce.netlify.app/)

### Features

- Signup using required informations
- Customer signin using email and password
- Customer signin using Google O-Auth
- Test payment Functionalites

## Tools & Libraries

- React.js
- Redux
- Firebase
- Firestore
- Google O-Auth
- Stripe
- Sass
- Styled Components
- Joi (Basic form validation)

## Local Setup

Once you have all the codes for this project first thing to do is create a new Firebase project in google firebase. After that get the Firebase config credentials and put them in the firebase.utils.js file and save it. Run npm install command to install all the dependencies and you are good to go.

```
const firebaseConfig = {
    apiKey:"Firebase project credentials",
    authDomain: "Firebase project credentials",
    projectId: "Firebase project credentials",
    storageBucket: "Firebase project credentials",
    messagingSenderId:"Firebase project credentials" ,
    appId: "Firebase project credentials",
    measurementId: "Firebase project credentials",
};
```

## Available Scripts For Local Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
