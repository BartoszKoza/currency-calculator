# Getting Started with Create React App

The application is a simple currency converter built in React. Here's a summary:

The app consists of three main components:

1. **Form**: Users can input an amount in Polish złoty (PLN) and select a target currency from a dropdown list.

2. **Calculator**: After filling out the form and clicking the "Calculate" button, the app computes the amount in the selected currency based on current exchange rates (fetched from `currencies.js`).

3. **Result**: The converted amount is displayed below the form, showing both the original amount in PLN and the corresponding amount in the chosen currency.

Additional details:

- The app uses React for managing component state and updates the conversion result reactively.
- Styling is implemented using CSS, with the main `App` container centered on the page, and the form and result styled for clarity.

The application is designed to provide a straightforward way to convert amounts from PLN to selected currencies using up-to-date exchange rates.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![preview](./public/images/screen.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.