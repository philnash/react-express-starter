## About This Project
THE 1 Firestarter

We are creating a merchant site for a single product called THE 1 Fire Starter. This is a recycled product made in Wisconsin for use in campfires, wood stoves, and fireplaces. Right now the product is sold in local hardware stores and at campgrounds. We'd like to help this company expand their clientele and enable them to ship throughout the U.S.

Important to us was creating a database for securing customer log in and shipping information. This is beneficial for both the company's records and the customer's experience.

Requirements:
* Feature user authentication
* Effort must be spent on styling, appearance, and user experience
* Must be deployed somewhere
* Back-end uses Node and Express
* Front-end uses React
* Database has at least two tables (SQL) and support at least one type of database relationship 1:M or N:M
* Uses ORM or ODM to interact with SQL database
* Must run in a web browser
* Site is responsive to screen sizes



Created by:
Tammy J Swierczynski
Crystal Korth
Sam Hughes
Cody Cork

### Tools and Libraries Used
* React
* Express
* Bootstrap
* Sass
* SQL
* Node
* Bcrypt

# React application with Express server

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then an Express server was added in the `server` directory. The server is proxied via the `proxy` key in `package.json`.

## Using this project





### Notes RE: Node_modules and package-lock.json
The node modules and package-lock.json should be placed it the .gitignore file and never pushed to the repository. However, since we will need to use the node modules to run the code, see below: 
The node modules and package-lock.json files are created and stored locally when running npm install. This command will install the dependencies that are contained in package.json. Instructions are below. Please ask Tammy or Crystal if you have any questions about this. 

### To get started locally, follow these instructions. Also, each time you begin coding, please make sure you follow these steps to ensure you have the most up to date code. 
1. Each time you start coding, you need to visit our github repository first and go to pull requests. https://github.com/defworm/Firestarter/pulls  Check if there are any new pull requests that need to be reviewed. If so, review the request and merge with the "Development" branch - not the main branch. 
2.  In your terminal (VS Code), use the command "git pull origin development" to pull the most recent updates into your terminal. 
3.   run npm i to install the package-lock.json and node_modules. Make sure you run this command in the Client and Server each time you pull new code in case there are new dependencies/node modules that need to be installed.
4. a. Create a .env file in the root folder. Add this information to your .env file:
        # Frontend
REACT_APP_SERVER_URL=http://localhost/3000/
        BE_PORT=3001
        use_env_variable=(put your PG_URI here)
        PG_URI= paste your link here
        DB_USERNAME=enter your username here, typically it is postgres
        DB_PASSWORD=enter your password here
        DB_DATABASE=firestarter
4. b. Create a .env file in the Server folder. Add this information to your .env file:
        PORT=3001
        use_env_variable=(put your PG_URI here)
        PG_URI= paste your link here
        DB_USERNAME=enter your username here, typically it is postgres
        DB_PASSWORD=enter your password here
        DB_DATABASE=firestarter
5. cd into Server and run npm i to install the package-lock.json and node_modules. 
6. Open your PGAdmin and create a new database named firestarter, or open your database and log in.
7. Start the app.
   You can start the server on its own with the command: npm run server

   Run the React application on its own with the command: npm start

   Run both applications together with the command: npm run dev

   The React application will run on port 3000 and the server port 3001.
8. Add the tables to your database. From the server folder, run sequelize db:migrate:all
        *If there are errors, to undo migration run npx sequelize-cli db:migrate:undo:all 
9. Add the seed data run npx sequelize-cli db:seed:all
                *If there are problems, undo the seed with the command npx sequelize-cli db:seed:undo
                *to undo only a specific seed use the command npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
10. Open the Postman app and check your routes: 
        a. localhost:3001 should res: Hello, Firestarters
        b. .../user should res: userRouter is working
        c. ../user/health shoud res: userRouter is healthy

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) to view it in your browser.

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

## Outstanding Bugs and Room For Improvement
* 


## Our Sources
* [react-express-starter](https://github.com/philnash/react-express-starter)
* [Sass Tutorial For Beginners](https://www.youtube.com/watch?v=_a5j7KoflTs&t=7372s)
* 