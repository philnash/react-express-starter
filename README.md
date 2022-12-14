# React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

## Using this project
##THE 1 Firestarter

#Created by:
Tammy J Swierczynski
Crystal Korth
Sam Hughes
Cody Cork

### Notes RE: Node_modules and package-lock.json
The node modules and package-lock.json should be placed it the .gitignore file and never pushed to the repository. However, since we will need to use the node modules to run the code, see below: 
The node modules and package-lock.json files are created and stored locally when running npm install. This command will install the dependencies that are contained in package.json. Instructions are below. Please ask Tammy or Crystal if you have any questions about this. 

### To get started locally, follow these instructions. Also, each time you begin coding, please make sure you follow these steps to ensure you have the most up to date code. 
1. Each time you start coding, you need to visit our github repository first and go to pull requests. https://github.com/defworm/Firestarter/pulls  Check if there are any new pull requests that need to be reviewed. If so, review the request and merge with the "Development" branch - not the main branch. 
2.  In your terminal (VS Code), use the command "git pull origin development" to pull the most recent updates into your terminal. 
3.  cd into Server and run npm i to install the package-lock.json and node_modules. 
4. Open a second terminal. cd into Client and run npm i to install the package-lock.json and node_modules. Make sure you run this command in the Client and Server each time you pull new code in case there are new dependencies/node modules that need to be installed.
5. Open your PGAdmin and create a new database named firestarter.
6. Create a .env file in the Client folder. Add this information to your .env file:
        PORT=3000
        REACT_APP_SERVER_URL=http://localhost:3000/
7.  Create a .env file in the Server folder. Add this information to your .env file:
        PORT=5000
        PG_URI= 'paste your link here'
        DB_USERNAME='enter your username here, typically it is postgres'
        DB_PASSWORD='enter your password here'
        DB_DATABASE=firestarter
8.  Start the server. 
   You can start the server on its own with the command: npm run server

   Run the React application on its own with the command: npm start

   Run both applications together with the command: npm run dev

   The React application will run on port 3000 and the server port 5432.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React Twilio starter

The [twilio branch](https://github.com/philnash/react-express-starter/tree/twilio) is a similar setup but also provides endpoints with basic [Access Tokens](https://www.twilio.com/docs/iam/access-tokens) for [Twilio Programmable Chat](https://www.twilio.com/docs/chat) and [Twilio Programmable Video](https://www.twilio.com/docs/video). You can use the project as a base for building React chat or video applications.